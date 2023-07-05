// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.wordSpacing.change.font
// Description:Set word spacing and word spacing to font dependent value and verify it works after font change.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Set word spacing and word spacing to font dependent value and verify it works after font change.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  _assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");
  // Get the width for 'Hello World, again' at default size, 10px.
  var width_normal = ctx.measureText('Hello World, again').width;

  ctx.wordSpacing = '1em';
  _assertSame(ctx.wordSpacing, '1em', "ctx.wordSpacing", "'1em'");
  // 1em = 10px. Add 10px after each word in "Hello World, again",
  // makes it 20px longer.
  var width_with_spacing = ctx.measureText('Hello World, again').width;
  _assertSame(width_with_spacing, width_normal + 20, "width_with_spacing", "width_normal + 20");

  // Changing font to 20px. Without resetting the spacing, 1em wordSpacing
  // is now 20px, so it's suppose to be 40px longer without any wordSpacing set.
  ctx.font = '20px serif';
  width_with_spacing = ctx.measureText('Hello World, again').width;
  // Now calculate the reference spacing for "Hello World, again" with no spacing.
  ctx.wordSpacing = '0em';
  width_normal = ctx.measureText('Hello World, again').width;
  _assertSame(width_with_spacing, width_normal + 40, "width_with_spacing", "width_normal + 40");
  t.done();
});
done();
