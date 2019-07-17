# Captcha for Congress

Hey! Thanks for showing up for reproductive rights. If you're here, you must want to put Captcha for Congress on your site, and this guide is here to help you do that!

###### (Disclaimer: Actual captchas, intended to prevent spambots from submitting forms, take a lot of work to create and maintain. _Don't_ use this in place of an actual captcha. _Do_ use this to show your support for reproductive health.)

## Installing

Captcha for Congress can be added to your site by adding the code below somewhere in the HTML of your page.

```html
<script src="/path/to/captcha-for-congress.js"></script>
```

Once you have that script on your page, you need to tell the captcha where and when it should appear. If you add the attribute `data-c4c` to any element, then when the user clicks on that element, the captcha will appear!

```html
<button data-c4c>Click me!</button>
```

## Customizing

If you would like the captcha to appear automatically once the page has loaded, then you can add `data-c4c="auto"` to the element. Note that, even if you use the automatic method, you still need an element to add that attribute to &mdash; the captcha will also use that element to position itself on the screen.

```html
<div data-c4c="auto">
  The captcha will automatically appear by this div.
</div>
```

By default, the captcha appears over a semi-transparent "shadow" that covers the rest of the page. To disable this, add `data-c4c-shadow="none"` to the element.

```html
<button data-c4c data-c4c-shadow="none">Click me</button>
```
