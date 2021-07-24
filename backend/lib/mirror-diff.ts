import {readdirSync,statSync,Stats} from "fs";
import {basename,resolve,join} from "path";
import _ from "lodash";

/** given a target dir or file, generate PreMirrorItem for the target. if target is dir recurses
 *  to fill up items */
function getPreMirror(target:string,parent:string,parents:string[],
    relPath:string):PreMirrorItem
{
    var targetStats:Stats=statSync(target);

    // name of target item
    var name:string=basename(target);

    var initialPMI:PreMirrorItem={
        name,
        folder:false,

        modified:targetStats.mtimeMs,
        size:targetStats.size,

        fullPath:resolve(target),
        relPath:join(relPath,name),
        parent,
        parents,

        items:[]
    };

    if (targetStats.isFile())
    {
        return initialPMI;
    }

    initialPMI.folder=true;

    var dirItems:string[]=readdirSync(target);

    initialPMI.items=_.map(dirItems,(x:string):PreMirrorItem=>{
        var res:PreMirrorItem=getPreMirror(
            // path to the current item + the next target item
            join(target,x),

            // current item is the parent of the next item
            name,

            // parents array becomes the parents of the current item + the current item
            [...parents,name],

            // relPath becomes the current item's relPath + the current item
            join(relPath,name)
        );

        initialPMI.size+=res.size;

        return res;
    });

    return initialPMI;
}

export function test1()
{
    console.log(getPreMirror("C:/Users/ktkm2/Desktop/web/courier-sync/package.json","",[],"."));
    console.dir(getPreMirror("C:/Users/ktkm2/Desktop/web/courier-sync/backend","",[],"."),{depth:null});
}