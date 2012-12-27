// Modifies Textarea behaivour to work as an item list in jQuery
// Written by and Copyright of Santiago Ruiz García, 2012
// Licensed under MIT
// https://github.com/dolarsrg/jquery-textarea-to-item-list

// Version: 1.0 - 27-12-2012

// Requirements
// ------------
// Luke Morton's JQuery Caret Plugin - https://github.com/DrPheltRight/jquery-caret

(function ($) {
    // Behind the scenes method deals with textarea content
    $.textareaToItemListCheck = function (text_area, line_max_length, limiter) {
        lines = text_area.val().split("\n");
        // Each line should start with limiter+' '
        line_start = 0
        for (var i=0;i<lines.length;i++){
          caret_position = text_area.caret();
          if (lines[i][0] != limiter){
            lines[i] = (limiter+' ') + lines[i];
            text_area.val(lines.join('\n'));
            if (caret_position > line_start){
              text_area.caret(caret_position + 2);
            }
          }
          line_start = line_start + lines[i].length;
        }
        // If the last line is longer than line_max_length splits it
        if (lines[lines.length-1].length > line_max_length){
          text_area.val(text_area.val() + '\n' + limiter + ' ');
          text_area.caretToEnd();
        }
    };

    // line_max_length --> Max of characters for last line in textarea. Defaults to 80
    // Limiter --> Symbol for list line start. Defaults to '•'
    $.fn.textareaToItemList = function (line_max_length, limiter) {
        line_max_length = line_max_length || 80;
        limiter = limiter || '•'
        text_area = this;
        this.focus(function(){ $.textareaToItemListCheck(text_area, line_max_length, limiter) });
        this.keyup(function(){ $.textareaToItemListCheck(text_area, line_max_length, limiter) });
    };

}(jQuery));