# CAPTCHA for Congress

Hey! Thanks for showing up for reproductive rights. If you're here, you must want to put CAPTCHA for Congress on your site, and this guide is here to help you do that!

###### (Disclaimer: Actual CAPTCHAs, intended to prevent spambots from submitting forms, take a lot of work to create and maintain. _Don't_ use this in place of an actual CAPTCHA. _Do_ use this to show your support for reproductive health.)

## Recommended Use
We've built CAPTCHA for Congress to be used in one of two ways:
1. **Page Load**: You can install the CAPTCHA to appear once a page is loaded. For maximum awareness, your homepage is best. If you'd prefer to use CAPTCHA on secondary pages, we recommend areas that don't interrupt key conversions, e.g. your blog, your educational content, or forums/community pages. 
2. **Click or Form Submit**: You can have the CAPTCHA appear when the visitor clicks on an element (a button, link, image, etc.) or when they submit a form. The CAPTCHA will not interfere with native browser events — when the visitor dismisses the CAPTCHA, they will be redirected to the link's URL or the form will submit as it would have by default.

## First Step

CAPTCHA for Congress can be added to your site by adding the code below somewhere in the HTML of your page. 

```html
<script src="https://captchaforcongress.com/captcha.js"></script>
```

## Appear on page load

If you would like the CAPTCHA to appear automatically once the page has loaded, then you can add `data-c4c="auto"` to the element. Note that, even if you use the automatic method, you still need an element to add that attribute to &mdash; the CAPTCHA will also use that element to position itself on the screen.

```html
<div data-c4c="auto">
  The CAPTCHA will automatically on the page!
</div>
```



By default, the CAPTCHA appears over a semi-transparent "shadow" that covers the rest of the page. To disable this, add `data-c4c-shadow="none"` to the element.

```html
<button data-c4c data-c4c-shadow="none">Click me</button>
```

## Appear on click

If you add the attribute `data-c4c` to any element, the CAPTCHA will appear when the user clicks on that element!

```html
<button data-c4c>Click me!</button>
```

