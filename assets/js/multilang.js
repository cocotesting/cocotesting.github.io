    // multilanguage
    let savedLang = localStorage.getItem('lang')

    $(function() {
      if(savedLang){
        selectText(savedLang);
      } else {
      savedLang = '日'
      selectText(savedLang);
      }
      
      $('#JP').click(function() {
      var lang = $(this).text();
        localStorage.setItem('lang', lang);
        selectText(lang);
        
      });
      $('#TC').click(function() {
      var lang = $(this).text();
        localStorage.setItem('lang', lang);
        selectText(lang);
        
      });
      $('#EN').click(function() {
        var lang = $(this).text();
        localStorage.setItem('lang', lang);
        selectText(lang);
      });

      $('#JP1').click(function() {
        var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
          
        });
        $('#TC1').click(function() {
        var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
          
        });
        $('#EN1').click(function() {
          var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
        });

      $('#JP2').click(function() {
        var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
          
        });
        $('#TC2').click(function() {
        var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
          
        });
        $('#EN2').click(function() {
          var lang = $(this).text();
          localStorage.setItem('lang', lang);
          selectText(lang);
        });
    });

    function selectText(lang){
          switch (lang) {
          case '日': 
            $('.tc').hide();
            $('.jp').show();
            $('.en').hide();
            break;
          case '中':
            $('.tc').show();
            $('.jp').hide();
            $('.en').hide();
            break;
          case 'EN':
            $('.tc').hide();
            $('.jp').hide();
            $('.en').show();
            break;
          default:
            $('.tc').show();
            $('.jp').hide();
            $('.en').hide();
            }
        }