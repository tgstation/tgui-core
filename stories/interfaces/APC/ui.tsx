import {
  Box,
  Button,
  LabeledList,
  NoticeBox,
  ProgressBar,
  Section,
} from '@components';
import { useEffect, useState } from 'react';
import { Window } from '../../layouts';
import { InterfaceLockNoticeBox } from '../common/InterfaceLockNoticeBox';
import { useBackend } from './backend';

type Props = {
  locked: boolean;
};

export const Apc = (props: Props) => {
  return (
    <Window width={450} height={445}>
      <Window.Content scrollable>
        <ApcContent locked={props.locked} />
      </Window.Content>
    </Window>
  );
};

const powerStatusMap = {
  2: {
    color: 'good',
    externalPowerText: 'External Power',
    chargingText: 'Fully Charged',
  },
  1: {
    color: 'average',
    externalPowerText: 'Low External Power',
    chargingText: 'Charging: ',
  },
  0: {
    color: 'bad',
    externalPowerText: 'No External Power',
    chargingText: 'Not Charging',
  },
};

const malfMap = {
  1: {
    icon: 'terminal',
    content: 'Override Programming',
    action: 'hack',
  },
  2: {
    icon: 'caret-square-down',
    content: 'Shunt Core Process',
    action: 'occupy',
  },
  3: {
    icon: 'caret-square-left',
    content: 'Return to Main Core',
    action: 'deoccupy',
  },
  4: {
    icon: 'caret-square-down',
    content: 'Shunt Core Process',
    action: 'occupy',
  },
};

enum ChannelStatus {
  Off,
  On,
  Auto,
}

const channels = [
  { title: 'Equipment', output: '760 W' },
  { title: 'Lighting', output: '1.28 kW' },
  { title: 'Environment', output: '110 W' },
] as const;

type ChannelSetting = {
  title: string;
  status: ChannelStatus;
};

const ApcContent = (props: Props) => {
  const { act, data } = useBackend();
  const { locked } = props;

  const [isOperating, setIsOperating] = useState(!!data.isOperating);
  const [channelSettings, setChannelSettings] = useState<ChannelSetting[]>([
    { title: 'Equipment', status: ChannelStatus.Auto },
    { title: 'Lighting', status: ChannelStatus.Auto },
    { title: 'Environment', status: ChannelStatus.Auto },
  ]);

  useEffect(() => {
    const status = isOperating ? ChannelStatus.Auto : ChannelStatus.Off;

    setChannelSettings((_prev) => [
      { title: 'Equipment', status },
      { title: 'Lighting', status },
      { title: 'Environment', status },
    ]);
  }, [isOperating]);

  const externalPowerStatus =
    powerStatusMap[data.externalPower] || powerStatusMap[0];
  const chargingStatus =
    powerStatusMap[data.chargingStatus] || powerStatusMap[0];

  const malfStatus = malfMap[data.malfStatus] || malfMap[0];
  const adjustedCellChange = data.powerCellStatus / 100;

  if (data.failTime > 0) {
    return (
      <NoticeBox info textAlign="center" mb={0}>
        <b>
          <h3>SYSTEM FAILURE</h3>
        </b>
        I/O regulators have malfunctioned! <br />
        Awaiting system reboot.
        <br />
        Executing software reboot in {data.failTime} seconds...
        <br />
        <br />
        <Button
          icon="sync"
          content="Reboot Now"
          tooltip="Force an interface reset."
          tooltipPosition="bottom"
          onClick={() => act('reboot')}
        />
      </NoticeBox>
    );
  }

  function updateChannelSettings(title: string, newStatus: ChannelStatus) {
    setChannelSettings((prev) =>
      prev.map((setting) =>
        setting.title === title ? { ...setting, status: newStatus } : setting,
      ),
    );
  }

  return (
    <>
      <InterfaceLockNoticeBox
        siliconUser={data.remoteAccess || data.siliconUser}
        preventLocking={data.remoteAccess}
      />
      <Section title="Power Status">
        <LabeledList>
          <LabeledList.Item
            label="Main Breaker"
            color={externalPowerStatus.color}
            buttons={
              <Button
                icon={isOperating ? 'power-off' : 'times'}
                content={isOperating ? 'On' : 'Off'}
                selected={isOperating && !locked}
                disabled={locked}
                onClick={() => setIsOperating(!isOperating)}
              />
            }
          >
            [ {externalPowerStatus.externalPowerText} ]
          </LabeledList.Item>
          <LabeledList.Item label="Power Cell">
            <ProgressBar color="good" value={adjustedCellChange} />
          </LabeledList.Item>
          <LabeledList.Item
            label="Charge Mode"
            color={chargingStatus.color}
            buttons={
              <Button
                icon={data.chargeMode ? 'sync' : 'times'}
                content={data.chargeMode ? 'Auto' : 'Off'}
                disabled={locked}
                onClick={() => act('charge')}
              />
            }
          >
            [{' '}
            {chargingStatus.chargingText +
              (data.chargingStatus === 1 ? data.chargingPowerDisplay : '')}{' '}
            ]
          </LabeledList.Item>
        </LabeledList>
      </Section>
      <Section title="Power Channels">
        <LabeledList>
          {channels.map((channel) => {
            const channelSetting =
              channelSettings.find((c) => c.title === channel.title) ||
              channelSettings[0];

            return (
              <LabeledList.Item
                key={channel.title}
                label={channel.title}
                buttons={
                  <>
                    <Box inline mx={2} color={isOperating ? 'good' : 'bad'}>
                      {isOperating ? 'On' : 'Off'}
                    </Box>
                    <Button
                      icon="sync"
                      content="Auto"
                      selected={
                        !locked && channelSetting.status === ChannelStatus.Auto
                      }
                      disabled={locked}
                      onClick={() =>
                        updateChannelSettings(channel.title, ChannelStatus.Auto)
                      }
                    />
                    <Button
                      icon="power-off"
                      content="On"
                      selected={
                        !locked && channelSetting.status === ChannelStatus.On
                      }
                      disabled={locked}
                      onClick={() =>
                        updateChannelSettings(channel.title, ChannelStatus.On)
                      }
                    />
                    <Button
                      icon="times"
                      content="Off"
                      selected={
                        !locked && channelSetting.status === ChannelStatus.Off
                      }
                      disabled={locked}
                      onClick={() =>
                        updateChannelSettings(channel.title, ChannelStatus.Off)
                      }
                    />
                  </>
                }
              >
                {channel.output}
              </LabeledList.Item>
            );
          })}
          <LabeledList.Item label="Total Load">
            <b>{data.totalLoad}</b>
          </LabeledList.Item>
        </LabeledList>
      </Section>
      <Section
        title="Misc"
        buttons={
          !!data.siliconUser && (
            <>
              {!!data.malfStatus && (
                <Button
                  icon={malfStatus.icon}
                  content={malfStatus.content}
                  color="bad"
                  onClick={() => act(malfStatus.action)}
                />
              )}
              <Button
                icon="lightbulb-o"
                content="Overload"
                onClick={() => act('overload')}
              />
            </>
          )
        }
      >
        <LabeledList>
          <LabeledList.Item
            label="Cover Lock"
            buttons={
              <Button
                tooltip="APC cover can be pried open with a crowbar."
                icon={data.coverLocked ? 'lock' : 'unlock'}
                content={data.coverLocked ? 'Engaged' : 'Disengaged'}
                disabled={locked}
                onClick={() => act('cover')}
              />
            }
          />
          <LabeledList.Item
            label="Emergency Lighting"
            buttons={
              <Button
                tooltip="Lights use internal power cell when there is no power available."
                icon="lightbulb-o"
                content={data.emergencyLights ? 'Enabled' : 'Disabled'}
                disabled={locked}
                onClick={() => act('emergency_lighting')}
              />
            }
          />
          <LabeledList.Item
            label="Night Shift Lighting"
            buttons={
              <Button
                tooltip="Dim lights to reduce power consumption."
                icon="lightbulb-o"
                content={data.nightshiftLights ? 'Enabled' : 'Disabled'}
                disabled={data.disable_nightshift_toggle}
                onClick={() => act('toggle_nightshift')}
              />
            }
          />
        </LabeledList>
      </Section>
    </>
  );
};
