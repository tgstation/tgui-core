import { RADIO_CHANNELS } from '@common/constants';
import { toFixed } from '@common/math';
import type { BooleanLike } from '@common/react';
import {
  Box,
  Button,
  LabeledList,
  NumberInput,
  Section,
  Slider,
  Stack,
} from '@components';
import { useState } from 'react';
import { Window } from '../../layouts';
import { useBackend } from './backend';
import { map } from './collections';

type RadioData = {
  freqlock: number;
  frequency: number;
  minFrequency: number;
  maxFrequency: number;
  listening: BooleanLike;
  broadcasting: BooleanLike;
  command: BooleanLike;
  useCommand: BooleanLike;
  subspace: BooleanLike;
  subspaceSwitchable: BooleanLike;
  channels: string[];
  radio_noises: number;
};

export const Radio = (props) => {
  const { act, data } = useBackend<RadioData>();
  const {
    freqlock,
    frequency,
    minFrequency,
    maxFrequency,
    listening,
    broadcasting,
    command,
    useCommand,
    subspace,
    subspaceSwitchable,
    radio_noises,
  } = data;
  const [freq, setFreq] = useState(frequency);
  const [volume, setVolume] = useState(radio_noises);
  const [broadcastingOn, setBroadcastingOn] = useState(broadcasting);
  const [listeningOn, setListeningOn] = useState(listening);

  const tunedChannel = RADIO_CHANNELS.find(
    (channel) => channel.freq === frequency,
  );
  const channels = map(data.channels, (value, key) => ({
    name: key,
    status: !!value,
  }));
  // Calculate window height
  let height = 133;
  if (subspace) {
    if (channels.length > 0) {
      height += channels.length * 25 + 8;
    } else {
      height += 24;
    }
  }
  return (
    <Window width={376} height={height}>
      <Window.Content>
        <Section style={{ userSelect: 'none' }}>
          <LabeledList>
            <LabeledList.Item label="Frequency">
              {freqlock ? (
                <Box inline color="light-gray">
                  {toFixed(freq / 10, 1) + ' kHz'}
                </Box>
              ) : (
                <NumberInput
                  animated
                  tickWhileDragging
                  unit="kHz"
                  step={0.2}
                  stepPixelSize={10}
                  minValue={minFrequency / 10}
                  maxValue={maxFrequency / 10}
                  value={freq}
                  format={(value) => toFixed(value, 1)}
                  onChange={(value) => setFreq(value)}
                />
              )}
              {tunedChannel && (
                <Box inline color={tunedChannel.color} ml={2}>
                  [{tunedChannel.name}]
                </Box>
              )}
            </LabeledList.Item>
            <LabeledList.Item label="Audio">
              <Button
                textAlign="center"
                width="37px"
                icon={listeningOn ? 'volume-up' : 'volume-mute'}
                selected={listeningOn}
                onClick={() => setListeningOn(!listeningOn)}
              />
              <Button
                textAlign="center"
                width="37px"
                icon={broadcastingOn ? 'microphone' : 'microphone-slash'}
                selected={broadcastingOn}
                onClick={() => setBroadcastingOn(!broadcastingOn)}
              />
              {!!command && (
                <Button
                  ml={1}
                  icon="bullhorn"
                  selected={useCommand}
                  content={`High volume ${useCommand ? 'ON' : 'OFF'}`}
                  onClick={() => act('command')}
                />
              )}
              {!!subspaceSwitchable && (
                <Button
                  ml={1}
                  icon="bullhorn"
                  selected={subspace}
                  content={`Subspace Tx ${subspace ? 'ON' : 'OFF'}`}
                  onClick={() => act('subspace')}
                />
              )}
            </LabeledList.Item>
            <LabeledList.Item label="Radio Noise Volume">
              <Slider
                onChange={(e, value) => {
                  setVolume(value);
                }}
                minValue={0}
                maxValue={100}
                step={1}
                value={volume}
                stepPixelSize={10}
              />
            </LabeledList.Item>
            {!!subspace && (
              <LabeledList.Item label="Channels">
                {channels.length === 0 && (
                  <Box inline color="bad">
                    No encryption keys installed.
                  </Box>
                )}
                <Stack vertical>
                  {channels.map((channel) => (
                    <Box key={channel.name}>
                      <Button
                        icon={channel.status ? 'check-square-o' : 'square-o'}
                        selected={channel.status}
                        onClick={() =>
                          act('channel', {
                            channel: channel.name,
                          })
                        }
                      >
                        {channel.name}
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </LabeledList.Item>
            )}
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>
  );
};
