import styles from '../styles/components/Section.module.scss';

import { PropsWithChildren, ReactNode } from 'react';

import { Box } from './Box';

type Props = Partial<{
  style: Record<string, any>;
  titleStyle: Record<string, any>;
  textStyle: Record<string, any>;
  title: ReactNode;
  titleSubtext: string;
}> &
  PropsWithChildren;

// The cost of flexibility and prettiness.
export function StyleableSection(props: Props) {
  const { children, titleStyle, titleSubtext, title, textStyle, style } = props;

  return (
    <Box style={style}>
      {/* Yes, this box (line above) is missing the "Section" class. This is very intentional, as the layout looks *ugly* with it.*/}
      <Box className={styles.title} style={titleStyle}>
        <Box className={styles.titleText} style={textStyle}>
          {title}
        </Box>
        <div className={styles.buttons}>{titleSubtext}</div>
      </Box>
      <Box className={styles.rest}>
        <Box className={styles.content}>{children}</Box>
      </Box>
    </Box>
  );
}
