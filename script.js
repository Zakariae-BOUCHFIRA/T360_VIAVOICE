const rs1 = ["Homme", "Femme"];
const rs3 = ["J'exerce une activité professionnelle", "Je suis chômeur ayant déjà travaillé", "Je suis retraité ou préretraité", "Je suis à la recherche d'un premier emploi", "Je suis élève, étudiant", "Je suis une personne au foyer", "Je suis sans profession"];
const rs4 = ["Agriculteur exploitant", "Artisan / Commerçant / Chef d'entreprise", "Profession libérale et assimilé", "Cadre de la fonction publique, professeur certifié ou agrégé, profession scientifique, profession de l'information, des arts et des spectacles", "Cadre d'entreprise (administratifs et commerciaux, ingénieurs et cadres techniques...)", "Profession intermédiaire de la fonction publique, de l'enseignement (dont professeur des écoles), de la santé (dont infirmier, sage-femme, kinésithérapeute), du travail social", "Profession intermédiaire administrative et commerciale des entreprises (commercial, technicien administratif...)", "Technicien (géomètre, dessinateur, travaux publics...)", "Contremaître, agent de maîtrise", "Clergé, religieux", "Employé et agent de la fonction publique", "Policier, militaire, pompier", "Employé administratif d'entreprise (standardiste, dactylo, secrétaire, hôtesse de l'air, steward...)", "Employé de commerce (caissier, vendeur...)", "Personnel des services aux particuliers (assistante maternelle, concierge, aide à domicile, coiffeur...)", "Ouvrier qualifié, chauffeur", "Ouvrier non qualifié", "Ouvrier agricole"];
const rs6 = ["Aucun diplôme", "Brevet des collèges ou diplôme national du brevet (BEPC, DNB)", "Certificat d’aptitude professionnel (CAP)", "Brevet d’enseignement professionnel (BEP)", "Baccalauréat d’enseignement professionnel", "Baccalauréat d’enseignement technique ou général", "BAC+2 à +3 (DUT, BTS, diplômes paramédical ou social, licence)", "Bac+4 à +5 ou supérieur (diplôme de 3ème cycle, master, doctorat, grande école)"];
const rs7 = ["Moins de 1 200 €", "De 1 201 à 1 500 €", "De 1 501 à 1 800 €", "De 1 801 à 2 200 €", "De 2 201 à 2 600 €", "De 2 601 à 3 000 €", "De 3 001 à 3 500 €", "De 3 501 à 4 200 €", "De 4 201 à 5 400 €", "Plus de 5 400 €", "Non réponse"];
const rs8 = ["Marié(e)", "Célibataire", "En couple", "Séparé(e)", "Veuf(ve)"];
const q1 = ["Préoccupé", "Désenchanté", "Révolté", "Pragmatique", "Optimiste", "Confiant", "Indifférent", "Heureux", "Non réponse"];
const q2 = ["S’améliore plutôt", "Se détériore plutôt", "Reste globalement la même", "Non réponse"];
const q3 = ["Très bien protégé par les lois et leur application en France", "Assez bien protégé par les lois et leur application en France", "Assez mal protégé par les lois et leur application en France", "Très bien protégé par les lois et leur application en France", "Non réponse"];
const q4 = ["La télévision", "La presse écrite (journaux, magazines papiers…)", "Internet (journaux en ligne, sites d’actualités, blogs…)", "Les comptes de réseaux sociaux des médias/journaux", "Les informations partagées par vos proches/amis sur les réseaux sociaux", "La radio", "Autre", "Non réponse"];
const q5 = ["Très utile", "Assez utile", "Pas vraiment utile", "Inutile", "Non réponse"];
const q6 = ["Celle que vous trouvez par vous-même dans les médias professionnels quel que soit le support", "Celle que vous relaient votre entourage ou vos amis, notamment sur les réseaux sociaux", "Non réponse"];
const q7 = ["Oui, et vous voyez précisément de quoi il s’agit", "Oui, mais vous ne voyez pas précisément de quoi il s’agit", "Non", "Non réponse"]
const q8 = ["Une très bonne image", "Plutôt une bonne image", "Plutôt une mauvaise image", "Une très mauvaise image", "Non réponse"];
const q9 = ["Tout à fait confiance", "Plutôt confiance", "Plutôt pas confiance", "Pas du tout confiance", "Non réponse"];

$(document).ready(function () {
  var testR = 0;
  var currentQuestion;
  var nextQuestion;
  const checkboxes1 = $('input[type="checkbox"][name="q1"][id!="q1_nsp"]');
  const nonResponseCheckbox1 = $('#q1_nsp');
  // Add a click event handler to the "Non réponse" checkbox
  nonResponseCheckbox1.on("click", function () {
    if (nonResponseCheckbox1.prop("checked")) {
      // Unselect and disable all other checkboxes
      checkboxes1.prop("checked", false);
    }
  });
  // Add a click event handler to all other checkboxes
  checkboxes1.not(nonResponseCheckbox1).on("click", function () {
    if (nonResponseCheckbox1.prop("checked")) {
      // If any other checkbox is clicked, unselect the "Non réponse" checkbox
      nonResponseCheckbox1.prop("checked", false);
    }
  });
  const checkboxes4 = $('input[type="checkbox"][name="q4"][id!="q4_nsp"]');
  const nonResponseCheckbox4 = $('#q4_nsp');
  // Add a click event handler to the "Non réponse" checkbox
  nonResponseCheckbox4.on("click", function () {
    if (nonResponseCheckbox4.prop("checked")) {
      // Unselect and disable all other checkboxes
      checkboxes4.prop("checked", false);
    }
  });
  // Add a click event handler to all other checkboxes
  checkboxes4.not(nonResponseCheckbox4).on("click", function () {
    if (nonResponseCheckbox4.prop("checked")) {
      // If any other checkbox is clicked, unselect the "Non réponse" checkbox
      nonResponseCheckbox4.prop("checked", false);
    }
  });
  $(".question:first").show(); // Show the first question
  $(".nextQuestion").click(function () {
    currentQuestion = $(this).closest(".question");
    nextQuestion = currentQuestion.next(".question");
    if (currentQuestion.find("input[type='radio'][name='rs3'][value='3']").is(":checked") || currentQuestion.find("input[type='radio'][name='rs3'][value='4']").is(":checked") || currentQuestion.find("input[type='radio'][name='rs3'][value='5']").is(":checked") || currentQuestion.find("input[type='radio'][name='rs3'][value='6']").is(":checked") || currentQuestion.find("input[type='radio'][name='rs3'][value='7']").is(":checked")) {
      // $("#rs4_rec").val('null');
      nextQuestion=nextQuestion.next(".question");
    }
    // Validate current question before proceeding to the next one
    var currentInput = currentQuestion.find("input:radio:checked, input:checkbox:checked, input:text, input:hidden").closest("label").find("input");
    if (currentInput.length === 0 || (currentInput.is(":radio") && currentInput.filter(":checked").length === 0) || (currentInput.is(":checkbox") && currentInput.filter(":checked").length === 0) || (currentInput.is(":text") && currentInput.val() == "") && currentInput.attr("name") != "intro") {
      // Show an error message or perform any necessary validation logic
      $('.error').html("Veuillez choisir une réponse");
      $('.error').fadeIn();
      setTimeout(function () {
        $('.error').fadeOut();
      }, 3000);
      return;
    }
    else if (currentQuestion.attr("id") == "question2") {
      
      let vrs2 = parseInt($('#rs2').val());
      if (vrs2 < 18 || vrs2 > 100) {
        $('.error').html("L'âge doit être entre 18 ans et 100 ans");
        $('.error').fadeIn();
        setTimeout(function () {
          $('.error').fadeOut();
        }, 3000);
        return;
      }
      else {
        maincode();
      }
    }
    else if (currentQuestion.attr("id") == "question5") {
      
        let vrs5 = parseInt($('#rs5').val());
        if (vrs5 < 1000 || vrs5 > 95999) {
          $('.error').html("Le code postal est incorrect");
          $('.error').fadeIn();
          setTimeout(function () {
            $('.error').fadeOut();
          }, 3000);
          return;
        }
        else {
          $.ajax({
            type: "GET",
            url: "getVille.php",
            data: { CP: vrs5 },
            dataType: 'json',
            success: function (response) {
              var t = response.length;
              if (t > 0) {
                testR = 0;
                response.forEach(function (item) {
                  var villeName = item.VILLE;
                  $("#cont").append("<label><input type='radio' name='rs_ville' value='" + villeName + "'> <span>" + villeName + "</span></label><br>");
                });
              } else {
                testR = 1;
                $('.error').html("Veuillez saisir un code postal valide");
                $('.error').fadeIn();
                setTimeout(function () {
                  $('.error').fadeOut();
                }, 3000);
              }
              setTimeout(maincode(),1000);
            },
            error: function (xhr, status, error) {
              console.log("Error: " + error);
            },
          });
        }
    }
    else{
      maincode();
    }


    function maincode(){
      if(testR == 0) {        
        var checkedValues = [];
        if (currentInput.attr("name") == "rs1") {
          $("#question1 input[name=rs1]:checked").each(function () {
            checkedValues.push(rs1[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs2") {
          currentQuestion.append("<div class='responseD'><p class='response'>" + $("#rs2").val() + "</p></div>");
        }
        else if (currentInput.attr("name") == "rs3") {
          $("#question3 input[name=rs3]:checked").each(function () {
            checkedValues.push(rs3[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs4") {
          $("#question4 input[name=rs4]:checked").each(function () {
            checkedValues.push(rs4[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs5") {
          currentQuestion.append("<div class='responseD'><p class='response'>" + $("#rs5").val() + "</p></div>");
        }
        else if (currentInput.attr("name") == "rs_ville") {
          $("#question_ville input[name=rs_ville]:checked").each(function () {
            checkedValues.push($(this).val());
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs6") {
          $("#question6 input[name=rs6]:checked").each(function () {
            checkedValues.push(rs6[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs7") {
          $("#question7 input[name=rs7]:checked").each(function () {
            checkedValues.push(rs7[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "rs8") {
          $("#question8 input[name=rs8]:checked").each(function () {
            checkedValues.push(rs8[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q1") {
          $("#question9 input[name=q1]:checked").each(function () {
            checkedValues.push(q1[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q2") {
          $("#question10 input[name=q2]:checked").each(function () {
            checkedValues.push(q2[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q3") {
          $("#question11 input[name=q3]:checked").each(function () {
            checkedValues.push(q3[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q4") {
          $("#question12 input[name=q4]:checked").each(function () {
            checkedValues.push(q4[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q5") {
          $("#question13 input[name=q5]:checked").each(function () {
            checkedValues.push(q5[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q6") {
          $("#question14 input[name=q6]:checked").each(function () {
            checkedValues.push(q6[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q7") {
          $("#question15 input[name=q7]:checked").each(function () {
            checkedValues.push(q7[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q8") {
          $("#question16 input[name=q8]:checked").each(function () {
            checkedValues.push(q8[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        else if (currentInput.attr("name") == "q9") {
          $("#question17 input[name=q9]:checked").each(function () {
            checkedValues.push(q9[$(this).val() - 1]);
            currentQuestion.append("<div class='responseD'><p class='response'>" + checkedValues.join(", ") + "</p></div>");
          });
        }
        
        // Hide the next button for the current question
        currentQuestion.find("input").prop("disabled", true);
        if (currentQuestion.attr("id") == "question18") {
          nextQuestion.hide();
        }
        else {
          if (currentQuestion.attr("id") == "question") {
            $("#btnD").hide();
          }
          currentQuestion.find(".nextQuestion, .txt").hide();
          currentQuestion.find(".nextQuestion, .nxtQ").hide();
          nextQuestion.show(500);
        }
        
      }
    }
    
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  });
  $('#rs2').on('keyup', function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });
  $('#rs5').on('keyup', function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });

  
  /* function isValidEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  } */
});