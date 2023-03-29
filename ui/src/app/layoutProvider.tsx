'use client'
import Navbar from "./navbar";
import { store } from './store'
import { Provider } from 'react-redux'
import LayoutChild from "./layoutChild";

const LayoutProvider = (props: any) => {
    return (
        <Provider store={store}>
            <LayoutChild item={props.item}></LayoutChild>
        </Provider>
    )
}
export default LayoutProvider;