import electron from 'electron';

const invoke = (handler, params) => {
    electron.ipcRenderer.invoke(handler, params)
};
  
export default {
    showDialog: (message) => invoke("showDialog", { message }),
}