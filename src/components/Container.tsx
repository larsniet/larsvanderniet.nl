import {
  forwardRef,
  ReactNode,
  RefAttributes,
  ForwardRefExoticComponent,
  PropsWithChildren,
} from 'react'
import clsx from 'clsx'

interface ContainerProps {
  className?: string
  children?: ReactNode
  [x: string]: any
}

const OuterContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ContainerProps>
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ContainerProps>
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

interface ContainerComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<ContainerProps> & RefAttributes<HTMLDivElement>
  > {
  Outer: typeof OuterContainer
  Inner: typeof InnerContainer
}

const Container = forwardRef<HTMLDivElement, PropsWithChildren<ContainerProps>>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }
) as ContainerComponent

Container.Outer = OuterContainer
Container.Inner = InnerContainer

export { Container }
