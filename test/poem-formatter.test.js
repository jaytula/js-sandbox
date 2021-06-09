/**
 *
 * @param {string} poem
 */
function formatPoem(poem) {
  return poem.replace(/\. /g, ".\n").trim();
}

const { assert } = require("chai");

it("Basic Tests", () => {
  assert.strictEqual(
    formatPoem(
      "Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."
    ),
    "Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated."
  );
  assert.strictEqual(
    formatPoem(
      "Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules."
    ),
    "Flat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules."
  );
  assert.strictEqual(
    formatPoem(
      "Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess."
    ),
    "Although practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess."
  );
  assert.strictEqual(
    formatPoem(
      "There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you're Dutch. Now is better than never. Although never is often better than *right* now."
    ),
    "There should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you're Dutch.\nNow is better than never.\nAlthough never is often better than *right* now."
  );
  assert.strictEqual(
    formatPoem(
      "If the implementation is hard to explain, it's a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let's do more of those!"
    ),
    "If the implementation is hard to explain, it's a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea -- let's do more of those!"
  );
});
