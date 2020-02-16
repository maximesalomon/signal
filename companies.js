const companies = [
  "shopfollain.com",
  "charlottesweb.com",
  "mensuas.com",
  "tulleandchantilly.com",
  "alvieromartini.it",
  "builderdepot.co.uk",
  "twiningsusa.com",
  "jinx.com",
  "cade.com.mx",
  "fajasmariae.com",
  "quirklogic.com",
  "dysonau.com",
  "canvasprints.com",
  "sissy-boy.com",
  "travelsim.net.au",
  "salesianum.org",
  "abeofootwear.com",
  "brindilles.fr",
  "broadcastnow.co.uk",
  "adamblockdesign.com",
  "lojakings.com.br",
  "bevilles.com.au",
  "nau.com",
  "perryellis.com",
  "danettemay.com",
  "osom.com",
  "windsorstore.com",
  "motortrend.com",
  "jlaudio.com",
  "innisfree.com",
  "palm.com",
  "norco.com",
  "tibi.com",
  "originalpenguin.com",
  "dynojet.com",
  "loja.cozinhasitatiaia.com.br",
  "us.antikbatik.com",
  "fixartv.bauhaus.se",
  "staging.signatureneedlearts.com",
  "stfrock.resultspage.com",
  "aafes.danner.com",
  "dev-aimn.vaimo.com",
  "shop.cricut.com",
  "swish.ca",
  "athletesfoot.com.au",
  "oadev.sigmabeauty.com",
  "canadianhouseandhome.com",
  "shop.australiangeographic.com.au",
  "shop.canon.com.sg",
  "harvardfiltration.com",
  "anglingdirect.nl",
  "osterhoutgroup.com",
  "noriel.ro",
  "ru.puma.com",
  "us.revitive.com",
  "shop.honeyville.com",
  "fnl.nl",
  "cellphonepartscanada.com",
  "intex.com.au",
  "yaleelectricsupply.com",
  "kramesstore.com",
  "monarchelectric.com",
  "ginebrabsas.com",
  "essenzahome.nl",
  "medscope.co.uk",
  "nikpol.com.au",
  "fighterdiet.com",
  "standardelectric.com",
  "mrchain.com",
  "chasin.nl",
  "lautrechose.com",
  "gabs.it",
  "trailappliances.com",
  "wacoal.co.id",
  "boxeurdesrues.com",
  "testoni.com",
  "newlook.ca",
  "habbitzz.com",
  "panhandleww.com",
  "teilor.ro",
  "stonefly.it",
  "gilsa.com",
  "formen.no",
  "mauriceelectric.com",
  "kensie.com",
  "rockandrolldenim.com",
  "burtonroofing.co.uk",
  "chakanawines.com.ar",
  "lolitta.com.br",
  "mantero.com",
  "tog24.com",
  "ako.nl",
  "revitive.com",
  "frau.it",
  "templespa.com",
  "gubelin.com",
  "santillanausa.com",
  "score.nl",
  "ew-ct.com",
  "ttpumps.com",
  "rudsak.com",
  "rejuvenateproducts.com",
  "manilagrace.com",
  "anglingdirect.fr",
  "fratelliguzzini.com",
  "earlysettler.com.au",
  "granquartz.com",
  "spicers.com.au",
  "happysocks.com",
  "lenco.com",
  "vortexoptics.com",
  "monceaufleurs.com",
  "nobodydenim.com",
  "run4it.com",
  "walterswholesale.com",
  "us-mattress.com",
  "renefurtererusa.com",
  "sssports.com",
  "cricut.com",
  "socialfood.it",
  "99bikes.com.au",
  "bioionic.com",
  "anglingdirect.de",
  "eplehuset.no",
  "drizabone.com.au",
  "usesi.com",
  "steelmantools.com",
  "peuterey.com",
  "ernolaszlo.com",
  "newmind.com",
  "hdbuttercup.com",
  "latestinbeauty.com",
  "tally-weijl.com",
  "shatristore.com",
  "marcfisherfootwear.com",
  "muuto.com",
  "carpetright.nl",
  "griffintechnology.com",
  "visiontek.com",
  "krcs.co.uk",
  "ewingirrigation.com",
  "pharmaca.com",
  "bicyclesquilicot.com",
  "ruralking.com",
  "fekkai.com",
  "sigmabeauty.com",
  "forevernew.com.au",
  "magnanni.com",
  "therugcompany.com",
  "munchpak.com",
  "williampenn.net",
  "reeds.com",
  "bwc.com",
  "lundinternational.com",
  "beyerdynamic.de",
  "sassandbide.com",
  "shopbentley.com",
  "bevello.com",
  "maskota.com.mx",
  "polywoodoutdoor.com",
  "reef.eu",
  "morato.it",
  "byredo.com",
  "theathletesfoot.com.au",
  "schots.com.au",
  "glassybaby.com",
  "jollyes.co.uk",
  "brixton.com",
  "halpahalli.fi",
  "47street.com.ar",
  "totaltools.com.au",
  "bioayurveda.in",
  "billyreid.com",
  "accuride.com",
  "trace3.com",
  "brabantia.com",
  "lacordee.com",
  "jysk.lv",
  "venum.com",
  "piazzaitalia.it",
  "aeroprecisionusa.com",
  "charlesriverapparel.com",
  "ergobaby.com",
  "swimsuitsdirect.com",
  "zodio.fr",
  "apriadirect.com",
  "tarocash.com.au",
  "incipio.com",
  "intelligentsiacoffee.com",
  "victorytailgate.com",
  "firstaidbeauty.com",
  "sancta-domenica.hr",
  "papersource.com",
  "citrusstv.com",
  "lotte.vn",
  "trexfurniture.com",
  "quiosque.pl",
  "centroconvarredi.it",
  "alharamainperfumes.com",
  "eberjey.com",
  "bmc-switzerland.com",
  "camillelavie.com",
  "modani.com",
  "bulkpowders.co.uk",
  "dodo.fr",
  "ericeirasurfskate.pt",
  "endclothing.com",
  "houseandhome.com",
  "johnnywas.com",
  "bodum.com",
  "nordicware.com",
  "credomobile.com",
  "cheesecake.com.au",
  "vistahigherlearning.com",
  "purebaby.com.au",
  "rockwear.com.au",
  "yd.com.au",
  "hayhouse.com",
  "nordicnaturals.com",
  "rock-ola.com",
  "bakerdist.com",
  "threedots.com",
  "paymaya.com",
  "trnk-nyc.com",
  "veronicabeard.com",
  "naturallife.com",
  "helzberg.com",
  "monin.com",
  "staples.ca",
  "betabrand.com",
  "zimmermannwear.com",
  "mountainkhakis.com",
  "mikesbikes.com",
  "goorin.com",
  "hobobags.com",
  "jessicasimpson.com",
  "aaglobalimports.com",
  "au.camilla.com",
  "leesa-sleep-canada.myshopify.com",
  "phoneinc.myshopify.com",
  "yallasale-com.myshopify.com",
  "us.lindafarrow.com",
  "chefmaster.com",
  "lindafarrow.com",
  "iloveskininc.com",
  "vionicshoes.com",
  "gigsky.com",
  "auroramj.com",
  "princesspolly.com",
  "republicwireless.com",
  "avana.com",
  "yogaoutlet.com",
  "shopplanetblue.com",
  "thinkempire.com",
  "shop.essential.com",
  "newrepublicshoes.myshopify.com",
  "irresistible.alrifai.com",
  "dduane.tumblr.com",
  "paradoxoutdoor.com",
  "milliondollarbaby.com",
  "liquidforce.com",
  "alaffia.com",
  "us.edu",
  "jordanacosmetics.com",
  "trackman.com",
  "vpz.co.uk",
  "navitasorganics.com",
  "solo-ny.com",
  "olly.com",
  "enjoylifefoods.com",
  "annke.com",
  "gemplers.com",
  "ethereum.org",
  "tech21.com",
  "oneills.com",
  "toolstoday.com",
  "misshaus.com",
  "naturessleep.com",
  "hudsonjeans.com",
  "bjornborg.com",
  "bauhaus.se",
  "scienceinsport.com",
  "bijoux-medusa.myshopify.com",
  "modaxpressonline.com",
  "oliphil.com",
  "bushwacker.com",
  "bulkpowders.com",
  "draperjames.com",
  "sheike.com.au",
  "mgigolf.com",
  "anda.pe",
  "osklen.com",
  "investorsinpeople.com",
  "hightone.com",
  "maryspizzashack.com",
  "trufusion.com",
  "universalcompanies.com",
  "360fly.com",
  "slendertone.com",
  "neos.co.uk"
];

module.exports = {
  companies
}