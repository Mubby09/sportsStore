import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType,
    data: phData[dataType]
  }
});

export default loadData;
