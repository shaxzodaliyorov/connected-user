export interface RouteType {
    path: string
    element?: React.ReactNode
    children?: RouteType[]
}