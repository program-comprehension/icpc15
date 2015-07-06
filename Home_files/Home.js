// Created by iWeb 3.0.4 local-build-20140918

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Users/fabiopalomba/Desktop/ICPC15/Home_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/fabiopalomba/Desktop/ICPC15',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/fabiopalomba/Desktop/ICPC15',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(1,new IWSize(488,488),new IWSize(488,16),new IWSize(488,519),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:1},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Home_files/HomeMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');adjustLineHeightIfTooBig('id15');adjustFontSizeIfTooBig('id15');adjustLineHeightIfTooBig('id16');adjustFontSizeIfTooBig('id16');adjustLineHeightIfTooBig('id17');adjustFontSizeIfTooBig('id17');adjustLineHeightIfTooBig('id18');adjustFontSizeIfTooBig('id18');adjustLineHeightIfTooBig('id19');adjustFontSizeIfTooBig('id19');adjustLineHeightIfTooBig('id20');adjustFontSizeIfTooBig('id20');adjustLineHeightIfTooBig('id21');adjustFontSizeIfTooBig('id21');adjustLineHeightIfTooBig('id22');adjustFontSizeIfTooBig('id22');adjustLineHeightIfTooBig('id23');adjustFontSizeIfTooBig('id23');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id17');fixupIECSS3Opacity('id21');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
