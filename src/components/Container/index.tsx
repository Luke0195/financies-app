import { ComponentPropsWithChildren } from '../../shared/interfaces'

export function Container(props: ComponentPropsWithChildren) {
  return <div className="max-w-screen-md m-auto">{props.children}</div>
}
