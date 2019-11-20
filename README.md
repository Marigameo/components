# components
I will be adding more frontend components and techniques used in popular apps by tech giants

1 . Content placeholder 

It is a effective frontend magic used by popular web apps to compromise users with effective web performance and UX

How it works?
Show a content placeholder instead of blank screen or loader to give a feel of progress.Once fully loaded replace it with actual content.

Used widely by Facebook,Medium,LinkedIn,Quora etc.

2 . Debouncing

While developing a customer friendly web app,our focus should be more on performance.Debouncing is one such technique in javascript that can make web apps performant especially when you are about to perform costlier operations like API calls to some server.

For Eg: Think of a e-commerce site like Flipkart,Amazon or Myntra,millions of users use their functionalities at a time,making millions of API calls every minute.Let say for a simple search functionality in Flipkart or Amazon if we are about to perform API call for each onkeyup event,it would not be performant.In that case debouncing can help us!Here we make a call only if the difference between 2 keystroke events is > limit ..

3 . Throttling

Throttling is similar kind of web optimization technique like debouncing.Here we do wait for certain limit(ignore all key events within the limit) and then make a call.

For Eg: Tracking the user when resizing the browser,loading images in infite scroll etc.