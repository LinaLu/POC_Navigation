import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RoutesParamList ={
    Home: undefined
    Account: undefined
    Billing: undefined
    Login: undefined
    Logout:undefined
}

export type RoutesNavProps<T extends keyof RoutesParamList> = {
    navigation: StackNavigationProp<RoutesParamList, T>;
    route: RouteProp<RoutesParamList, T>;
}