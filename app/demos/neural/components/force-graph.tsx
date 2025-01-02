import React from 'react'
import dynamic from 'next/dynamic'
import { ForceGraphMethods, ForceGraphProps } from 'react-force-graph-2d'

// Define proper types for the ForceGraph component
type ForceGraphComponentProps = ForceGraphProps & {
  ref?: React.ForwardedRef<ForceGraphMethods>
}

// Create the dynamic import outside the component
const DynamicForceGraph = dynamic(
  () => import('react-force-graph-2d').then((mod) => {
    // Ensure the module default export is properly forwarded with ref support
    const Component = mod.default
    return React.forwardRef((props: ForceGraphProps, ref) => (
      <Component {...props} ref={ref} />
    ))
  }),
  { ssr: false }
)

// Create a properly typed wrapper component
const ForceGraphWrapper = React.forwardRef<ForceGraphMethods, ForceGraphComponentProps>(
  (props, ref) => <DynamicForceGraph {...props} ref={ref} />
)

ForceGraphWrapper.displayName = 'ForceGraph'

export { ForceGraphWrapper as ForceGraph }