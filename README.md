# swipeBot
JS bot to show a friend that automating tinder swiping was easy

You must disable CSP you can do this for firefox by going to "about:config" in your url bar. Then search for "security.csp.enable" and set it to false. I would recommend using a browser that you do not regularly use.

- Copy the "tinderSwiper.js" file contents into your browser console.
- Create a bot by issuing a command like:
```
    dora = new tinderSwiper() // You can add true and a rate in seconds to the arguments like tinderSwiper( true, 5 )
```
- Start the bot by:
```
    dora.swipe() // You can add the max time to swipe in seconds as an argument i.e swipe(5) for 5 seconds
```
Stop the bot by:
```
    dora.stop();

```
