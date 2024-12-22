import { KeyEvent } from '../common/events';
type Props = Partial<{
    onKey: (key: KeyEvent) => void;
    onKeyDown: (key: KeyEvent) => void;
    onKeyUp: (key: KeyEvent) => void;
}>;
export declare function KeyListener(props: Props): null;
export {};
