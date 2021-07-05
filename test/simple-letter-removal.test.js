/**
 *
 * @param {string} s
 * @param {number} k
 */
function solve(s, k) {
  let result = s.split("");
  const dic = {};

  const letters = Array.from({ length: 26 }, (_, idx) =>
    String.fromCharCode(97 + idx)
  );

  letters.forEach((letter) => {
    dic[letter] = 0;
  });

  result.forEach((ch) => {
    dic[ch]++;
  });

  while (k > 0) {
    for (let letter of letters) {
      if (k >= dic[letter]) {
        k -= dic[letter];
        s = s.replace(new RegExp(letter, "g"), "");
        continue;
      } else {
        const sArr = s.split("");
        for (let i = 0; i < k; i++) {
          const index = sArr.indexOf(letter);
          sArr.splice(index, 1);
        }
        s = sArr.join("");
        break;
      }
    }
    break;
  }
  return s;
}

const Test = require("@codewars/test-compat");

it("Simple letter removal", function () {
  Test.assertEquals(solve("abracadabra", 1), "bracadabra");
  Test.assertEquals(solve("abracadabra", 2), "brcadabra");
  Test.assertEquals(solve("abracadabra", 6), "rcdbr");
  Test.assertEquals(solve("abracadabra", 8), "rdr");
  Test.assertEquals(solve("abracadabra", 50), "");
  Test.assertEquals(
    solve(
      "zheywbhgyagbrigixaaehgdffjxvbofotrktssrghukzzuhqbzfrcyvmkqyhperchezcwsxahgrtalulggxdxanjondefdipduihlwfjijmftkbuhxyuaquhwwnenokydsgcnepuozozbipvtsrcjcutwulrbtnigqgvkderdtyytwmmcboumsaakjxcqhhajdjbsgemiyuolxqdkrfwqccthhsxwvairvavqcpvsnlszbinlepmddliyhkcxrwxoegqarzvqxsewzxlzydjvlgnsrctzyoebbvgjfxdkhscgvrhbmyjnwifcdlpisiwydfzdqttymkvuhqmzunmaszuwymtnxrdxxdijaxftsvoiuvotjqthpowhaibjlkcdnemlsgpevrhmisouxjwiovxvfttaltbpjeaaemyobdsdngovgtbidbuyawnpdqzjtjutqzpnzetlghhooygutminavhgznvjbczgqdinhcphvilbwctqwrmshfckyesmwctkfeczehfvjnajhmxkbkxzvbayeemprtjzqmrrbuzokuewjbusidyewwbyskfakildeuwjuuvshdyjhnfvhfzrbhfecbiqevqnxthmwlflyenbvwufluxsywqoggypaolsjvzujukllbsdzvcpcifwlesqjyveeilfyccviuykfqdhnkvrlzgkzsngtbqayvdmkpugeqiexsxxjcmtjsdvtidlljwqqjtzwaxfcqdzciuxxnvyuxwlusiyfuwmgdyreusempjyjlnvteqplgdfdlkpwwpynhyliwxhaqkaccatyyinyxjvwbjttcnxexzznuwyqochcfbtxkhiplbeqyynfnksknntkfbvawwukjooxdjtshvydvshhzuuqvgmlzsxfjyfcpgmvrpgnmmnkupwuzpiebzwvivlpvcuhrvijykzfhxaxtevyzxculcjjdrqtngtbxisvlpgzzrpsebjvktqqymmvsisaydklptizeprcuziosbfulwdxeuzuvteznfsqmqwfziqfwepzychexesgfrzaidyldtejfvvndlbhnmmrepcgwdgkeufkayujcrewysqssvpfuaozngvmxzhtjpmeqmpiykasffbhralommtkdgjlxygsqizqnsgybnqbixcvcrayxzhmbibgosqamjccbkazcolzqrkhtxqzfqludpqmyuizjliftarququftsmoppxgxdenbyiyjtzkeokzalxqeysmuoryzrknicgyiervzcqusbbgtamoxwpoqhqdvcqpvfiqtercgygqbcizvieganccjlstmdoawdhfvbbhsrfmrknzmxercsrfdtqhturtmbgoeemwihnhrdeopmqjtlefkyytqybcvrzkzrolxtvzsycngbbocqkvsgmoryfqczltwnhxciwwboedqjunoqckanqjhainrkkljylzmovsqpjmgwlmkbohohikxosrqxvbkoykwnckmfqykehdukwxgqrzzorprzgveunxvbrhgolmwvuvjchaovtydcshhowgapekpiuwnonqactimgaihlgxsknbjumzvagfkhqowryhyvsphgvwpvzcmauecwyktwfgqhecpkawyqsmtqhzeyxzsqgnjficxamxkptxluxfrwynudflyhqhnlpzoioojjxbcxxocbmrlsgwcvmkpgsnrocabapwhrzlnubbuhobgonnbwpzghhhvngxwesyrfposocajoktucwiviepjbyajkavbksrnayoksidnikrnjkrefwhmgkhikzbpdoylzfsiywnlsexswrnthrhbgufkkjawzomvejpheeztfmmtfqndaixkuyvswfvokyickzwqcazeumqmfezcfzbwppbynfrjusievgceryqkxtgbqudhqbkgotlklppeajoyyiaknptkhtnamhueompfgysluaootchcdafuockijsitwdaypidwioyahwrtwqxfgvxwenloavbhrxgmrgdjovqwnubhjkjwuhlgseqjxnxwaojdowwxpmctxhedocqjldkkyjwxkcplaaetexoavzsqjjjhusyjgkcdwrouxkjjljpsnhqeawsqbwrralcxnzooknvqfgcemxxkoqwftiabeqayqeisqyhnqcwlotqtruclcgwvnjwsfjcwmaszvhlmtlorteejdzmfxpbebqkeudanpjnilnfbdjctvxnhmenxndueuciriggoitopbescfqegxylyxskewmgckulikigdqzrpqnnqyqttfrvsajenqduefkkxttbvwzhjdadtsosdzncxwusrkkjpvrztelsyjfsecbyntskuwkphgptankiwrmoieiwilmzmlwvrzvlhhmsomtxgnoqpyvbyfjypuuubueukpacofnhzcvzawajqnqragegmzzdvnzbwhrdyttvmgaydqdacrclvfpjbxoaqjyukxagvjmailqtqcfaxgjbgjtxnjwzdlatxaighukgaqcydygtcfzpphsgsimolghlqotsyfbmwhmnsjqpcgreludpjykpmnttjuivzxwnukqpmbrernkeiqhjwwkwoqcpsrxaytunvidmrisehlmoxhtzbumdkaenfvjyphqxoandqfbozpklkriezxakfyjsmtycwootuhiyghgaejrnrbbxjgacxumrmglfsntotvqtbvgckynnjexrvygdaydlydvnmhbxbdcdojskpbjzhmzmadzycjkugdsnwvnxyurxqkcxgspicmggvijuwnslwlktdlvwmszpvsnnfmeaewxcqrhvjwslehvpzgrbiwycgbhynrpmjcluaxuxtpflbpgsopkkepfzfqodthrkayhfwqmgivobnuqgvtolctzsfbzngoqmjbszhhcpfqvcwepkpgnprcvffmyyebisrfuwghaqmdspnmabmwejxwyzwnyvxmrcgoondwnherpsazhsjoaoljqnmufenqnlbbcuqmlkvvqoueijutjcpabwythtavmrvfxxkdszlzdyjuehchqjuxopxlgspludnbrsnzwvehunafadprhxpgxqgbkjrzceswxwqagdpgcwghqucvvwkpzguxeyatmrakvsqilgbvkjvrubeecrasxceancwjwzhpmnhnrmapruwxbyulujjktarvowcjcmkmwegdzjissawiusprtibxymwwjelxrrfgukypfdzzdscbustpkskyyulowehgvbvzukkukoxutqjtkdlzwvpfrrwkomjygxwgkdmxpqlvhjboypmxvgtyfjvmhbwacxbdrmmmkcimarbpoatsktkooavrvperjdonauyytndyfopcpuknzkfzlqgykkkuacbafxvfnofmdiijlscdgeqobqucbsvsprvuthwiqgypvcvbdlfkoeqftoksamfelfhqdjcuujtuhtbhnyqmuehgzuugivkktysoivnualnzeusxhowrqwkyhdllnokvneqxslyrjictmyvsanhlpywxmritqcettyjojozhkzgbtjcwbntmviwxkjphgryuukijqausowxgcutvttcohuldnezpnlseaewnwkfurpkrucmyuztqqutbyospbbwalofbzwqqlchxzcelfcpzuxehnredialjrxceorjxhidwfxaiegmkfwozimlasokjvodqjajwmebahofjauluylozfwblupkuoitolgezbhhcfwzcvybvulkghdfjvfgjqyfqkvirvqrqxsnqalcnymmkterpycmkbrxcyeilxqmjiefgoykogwvbnwlohqahcsmywlbkoghloqjryawqtptvmuubxmyztmxwydyqzzihfdplripcxthjunpizoyuqraqodexhhijzgnagcdjwvuehptqlkixlbulhcdrkvcdugeagkslblexhdddrsvccepqdawlqjzomfiydybggrqbojctmyjjwrtzosuwccnykjdmrphrwjtfryszkmbbhhlgmmowjmdkqkprqlkukwfwtongingxctwcqxphhbqlcechcmxerlxsrkinsfpbgvsirilspjtsewvwhmyaautouuejwtfnwafptdvozrijkjrpetnkteacdvahvvwudmzcopcybyfjzpsnmonwvuakoqjfzgbmexpvrfolmnpglxbgbzwoizgmfndqtsxxeipnjkgmquryrpieorhxxautvdjpmxhouszvzhtavnwfdtxoyqjvmngyrwutucfcvbfumuvbwsrdpejdwlorzebvssfwdzxvnuoszcgezhqmxuycxvlfgtaedjiswzajjdbdrotifjantgekffqnwlxotucangcvpdijfaldhepavmchxnhigtsfdvevvkiqadebebgpdtdthceuveybtcrwoffvgoclwxkiwcuwhuzexbxkrxsdupgkuecgpgesdafcdbivdffixqnlxrnbzgilmupextqczngvdfbfcnuaeyynyiawvccgpycmhekclszyszzfbkoowzevcajiaexcjefwwytligrzzvbmwljnpinbzjccuoailwumsojpuzhiqtlxsxuiqnbxggcbhfqfselnsegghmeclkppafrvpqoynajzbtcetgittcebihmutzshqjenwsyevadiiztlkqotwkqswnuzvpemeqthemgflxesskvlwbjamuzsggdsvuhvnnpolmuzqpjhecurqjzefdpfdkqzskyalpuhwxwbcygduerpkbyoxnxgdcopdcuxpgdczibtsdmzkwzcivxgratyigecjupmlcztnytocboiylwqdkzlsbooetsfirqpvewuvylgmnzwkzivsbnpotfnozufwiqctgdlmnkpjmdxokikxqitswhyatqzktropuezqlgfqaxohpczxqjtkumuopzxtulctpikabtcumxetnalmewhcyueubjgcutpsiqlimfwgmqtldguhijjemjiqbmpqxbielkpeoagyohgtnipnxmnsydlsvqujrfyrjaqprxfkljztsavacltsmyxhvlxruknvevdwzcvbnsbetzebitoacvjegqpejjghtexvdbkkpavejyzwjbnqzgbgtvmdkunfarqwpgvmbmgmanamkqopgpqrlavubetynybqykzrclefrktwbjmtjkauphjywfstednibbhofufmgjvwswhfnowmbjdstfmfwlhevtaumkekpbcwuvlemvisavbdgazgyoufwgoakuorirwyyilnqcswspvsqljivkysebvumsplonsgefbtwqldfgusyhfmdkaryknmgxpmirtgeiuseiabcpnpkltcikmibfhtsjfdcijwzqitcisjsuohljcxziewkwnbwqsyzivukndwiftmurkgfarewbycghpajyugfxfketlbuemfpmmjytkvstzceyuupkipwokznszghuttqcuzskbugcjs",
      4444
    ),
    "zywyxxvzzzyvyzwxxxwxywwyzzvwvyywxyxwxwvvvvzyxwxzvxwzxzyvzyvxvywwyzyvzzwyxxxxvvwvxwvxvyvywzzzyvzvzvwwywzvxxzvyzzwywwywvyvzvxwyvwxywyvzzvwyvyvyvzzyvxxxvwzwxzxxvyxwywyyvwwyywxyyyxvwxxzzwyxyyvwwxvyvzvzxyvwzzwvvvvyzxxvyzxxvzzvyvyzzwxzvzwzwzyxzyvvwywyvzvxzyxyzyxvyxzzzxzyzxxyyzzxyyzyvzxwvvyzvwvzxwyyyvzzxvzyvyzwxwwyzvwxxvywywxzzzvxvwvvvywwxzvwyyvvwvzwywwyzyxzxxxxwyyzxxxwvwzwzvxwywvyvywzyzywxwwzvzxyvwvyzwzzzwyvyxyyywywywwxvxwvxvwwxxwwwxxywxxvzywxwwxzvxxwyywwvwwzvzxvxxxyyxwzyvxvwzzxwvzyywwwzwvzvxyvyyzvzwzzvzwyvyvxyxvxxwzxyyzywyvzxwwwwxyvxzvyxzzxyywyxxvvyxvyyyvxzzzywvxyxxvwwvwzvwxvwvzwyyxxzywvvzzzvwvyywwxwyzwyvxwzvvwyvvxxzzyxxzwvxxzwxwwvvwzxyvvvxwwzwxyvwwzwxywwxyzzyywvvzxzwvwyxwxvyxvyvwxvvyyyzzyxvvvwyvvyzvyvzxwwyvxyyvywxyzzwvwxywxvzwwyzywzwxzzxxxwxwzvwyzwzwzvyvvyvvxyyxyxywvwywywvxyzxwyyzzxzyxzwvxvxvwzyyywzwywyzwwwxwxxxvwvwywwvzvvvwzyyzwvzxvxzwzxxyxxvxzvzvwxyvywvvwwzvwzxvzzxyxvwzwxvvxvvvvywvwxwwzxxxvxxzxzvyyywvyzyzzwzvxwwyzzvwzwzxxxvyzzwyvzwwzvxvwzvvzzzywxwyyxxxzzwzvxyzyywzvwvyzwzvzwxxwyzzxzxzxxwywxyxyvyxzvyxvxvvwzvzvxvvyzwzvwvvyyyzwywvwwwwvwvvvzywwyywvvyvwyyxwzxzwwwyzvwwyyxyvzywzzuzu"
  );
});
