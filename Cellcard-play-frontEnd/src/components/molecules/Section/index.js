import React from 'react';
import Flex from 'components/atoms/Flex';
import Divider from 'components/atoms/Divider';

export default function Section(props) {
  const { children, ...otherProps } = props;
  return (
    <section {...otherProps}>
      <Flex>{children}</Flex>
      <Divider />
    </section>
  );
}
