states rows can be in

- ~~background hover colour for default state~~ and all other states
- ~~modified (yellow)~~
- ~~modified (orange)~~
- ~~added (green)~~
- ~~removed (red)~~
- ~~folder collapsed state~~
- ~~file row~~
- ~~indentation~~
- ~~status icon~~

# more changes
- ~~match padding on header size/modified text, check paddings on other things to see if they should share~~
- ~~highlight the problem in modified error state~~
- ~~open folder/closed folder icon~~
- ~~small indicator below modified/size column headers to show which side is mirror and base~~
- think about new recursive mirror diff items data structure

# more changes 2
- arrows showing the direction of change
    - maybe not? not really enough space??
- redesign highlighting modified error problem, doesnt really stand out enough, just looks like another date on the list which is already rainbow, so its just another part of the rainbow. if every thing was one colour and it was different it would work, but not as it stands with the rainbow
    - perhaps have a thick background highlight? would be the only one with it
    - or underline
- still need help making it obvious that what is being shown is the **TARGET THAT IS ABOUT TO BE CHANGED**. so need to make sure there is no terminology like "base", because base makes it sound like that is the thing being changed, but base is the thing that's about to override the target. maybe when the diff info/control panel above the table is made this will help with that