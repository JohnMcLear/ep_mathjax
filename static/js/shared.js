var collectContentPre = function (hook, context) {
  var cls = context.cls;
  const tname = context.tname;
  const state = context.state;
  const lineAttributes = state.lineAttributes;

  if (!cls) return; // required for import

  var tagIndex = cls.indexOf('mathjax');
  if (tagIndex === 0) {
    //    console.log(context);
    var cls = cls.split(' ');
    //    console.log(cls[1]);
    lineAttributes.mathjax = cls[1];
  }

  var tagIndex = cls.indexOf('mathjax');
  if (tagIndex !== -1) {
    lineAttributes.mathjax = 'mathjax';
  }

  if (tname === 'div' || tname === 'p') {
    delete lineAttributes.mathjax;
  }
};

var collectContentPost = function (hook, context) {
  const cls = context.cls;
  const tname = context.tname;
  const state = context.state;
  const lineAttributes = state.lineAttributes;

  if (!cls) return; // required for import

  const tagIndex = cls.indexOf('mathjax');
  if (tagIndex >= 0) {
    delete lineAttributes.mathjax;
  }
};

exports.collectContentPre = collectContentPre;
exports.collectContentPost = collectContentPost;
