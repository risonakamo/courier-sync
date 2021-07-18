import Index from "./Index.svelte";

function main()
{
    new Index({
        target:document.body,
        props:{
            thing:[]
        }
    });
}

window.onload=main;