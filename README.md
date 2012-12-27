JQuery Textarea To Item List
============================

Modifies Textarea behaviour to work as an item list in jQuery

$.fn.textareaToItemList([line_max_length, limiter])
-------------------------
### Parameters:
line_max_length (int): Max of characters for last line in textarea. Defaults to 80
limiter (string): Symbol for list line start. Defaults to '•'

Use this method with to modify the behaviour of a textarea to work as an item list.

```javascript
$('textarea').textareaToItemList();
```

## Author

Santiago Ruiz García

## License

MIT (http://en.wikipedia.org/wiki/MIT_License)