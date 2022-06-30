import { store } from ".";
import { ProductEightAction, ProductFiveAction, ProductFourAction, ProductOneAction, ProductSevenAction, ProductSixAction, ProductThreeAction, ProductTwoAction } from "./actions";


store.dispatch(ProductOneAction());
store.dispatch(ProductTwoAction());
store.dispatch(ProductThreeAction());
store.dispatch(ProductFourAction());
store.dispatch(ProductFiveAction());
store.dispatch(ProductSixAction());
store.dispatch(ProductSevenAction());
store.dispatch(ProductEightAction());