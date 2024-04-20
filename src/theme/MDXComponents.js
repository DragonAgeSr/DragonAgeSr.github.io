import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Table from '@site/src/components/Custom/Table';
import Separator from '@site/src/components/Custom/Separator';
import Party from '@site/src/components/Custom/Party';
import {YouTube, Twitch} from 'mdx-embed';
import { Tooltip } from '@site/src/components/Tooltip/Tooltip';
import Ability from '@site/src/components/Custom/Ability';
import Float from '@site/src/components/Custom/Float';


export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Table,
  Separator,
  Party,
  YouTube,
  Twitch,
  Tooltip,
  Ability,
  Float
};