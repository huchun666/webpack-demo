import tpl from './layer.html';

function layer() {
    console.log(process.env.NODE_ENV)
    return {
        name: 'layer',
        tpl: tpl
    }
}

export default layer;