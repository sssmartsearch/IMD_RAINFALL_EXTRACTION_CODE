*'reinit'
'open D:\Rainfall\rf.ctl'
***********************************
count = 1
while (count < 367)
'set t 'count
'define rainfall=ave(rf, t='count', t='count')'
***********************************
***********************************
'set grid off'
'set display color white'
'set grads off'
'set cthick 12'
*'set xlopts 1 6 .15'
*'set ylopts 1 6 .15'
*'set font .5'
'set map 1 1 9'
**********************************
**********************************
**********************************
'set geotiff D:\Rainfall\day_'count''
'set gxout geotiff'
*'set clevs 2 3 4 5 6 7 8 9 10 12 15 18 20'
*'set clevs 2 4 6 8 10 12 15 18 21 24'
'd rainfall'
*'mapi1.gs'
*'cbarn'
**********************************
**********************************
*'draw title rainfal (mm) for 1911'
*'printim rainfall_1901.png white'
*'printim geotif.tiff white'
count = count + 1
endwhile
