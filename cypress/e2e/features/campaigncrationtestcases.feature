Feature:Campaign
    Background:
        Given I navigate to login page
    Scenario: validation for campaign creation.
        # Scenario: login page
        When the user enter the name in "Email" input field
        When the user enter the name in "Password" input field
        Then user click on the "Login" button
        # Scenario:  static page
        When user click on "Marketing" in the dashboard page
        When user click on "Campaign" in the "marketing" dashboard
        When user click on "Campaign" in the dashboard
        When user click on "NUEVA CAMPAÑA" button in home page
        When user can verify the text "Nueva campaña"
        When user can verify the text "Al crear tu campaña obtendrás claridad sobre:"
        When user can verify the image in "first" box in campaign creation
        When user can verify the text "Los objetivos que cumplir. La delegación de tareas." in campaign 
        When user can verify the image in "second" box in campaign creation
        When user can verify the text "Contenido creativo. Canales de comunicación. Automatizaciones."
        When user can verify the image in "third" box in campaign creation
        When user can verify the text "Audiciencia a la que impactaras. Perfiles de los clientes potenciales. Segmentación."
        When user can verify the image in "fourth" box in campaign creation
        When user can verify the text "La estructura de costos."
        When user verify the close Icon "<step=0>"
        When user can verify the text "¿La campaña que vas a crear incluye a " in campaign 
        And user click on the "Si" button
        And check the important box
        When user can verify the text "Si vas a crear una campaña maestra, previamente debes crear las campañas que asociarás"
        Then user click on the "INICIAR AHORA" button

        # Scenario: step 1 testcases for creation of campaign

        When user click on the "SIGUIENTE" button
        And user click next button before filled the input fields and check the input fields changes to "red" color
        When user can verify the text "NUEVA CAMPAÑA"
        When user can verify the text "Información básica"
        When user verify the close Icon "<step=1>"
        And the user enter the name in "Nombre de la campaña maestra" input field
        And the user enter the name in "Descripción" input field
        And user verify the api data
        And user check the FE dashboard names and BE dashboard Names
        And user clicks on the "Solicitante (cliente interno)" dropdown 
        And user search the dashboard names below dropdown using search box
        And user select one "dashboard" in the below dropdown
        And user check the FE user names and BE user Names
        And user select one "instructor name" in the below dropdown
        And user click next button after filled the input fields and check the input fields changes to "green" color
        And also get one crossIcon check the crossIcon color "green"
        When user click on the "SIGUIENTE" button

    # Scenario: step 2 testcases for creation of campaign

    When user click on the "SIGUIENTE" button
    And user click next button before filled the input fields and check the input fields changes to "red" color
    When user can verify the text "NUEVA CAMPAÑA"
    When user can verify the text "Asignar agente"
    When user verify the close Icon "<step=2>"
    And user clicks on the "Solicitante (agent interno)" dropdown 
    And user verify the agent name api data
    And user check the FE agent data and BE agent data
    And user select one "Agent name" in the below dropdown in step2
    And user click next button after filled the input fields and check the input fields changes to "green" color
    And also get one crossIcon check the crossIcon color "green" in step2
    When user click on the "SIGUIENTE" button

    
    # Scenario: step 3 testcases for creation of campaign

    When user click on the "SIGUIENTE" button
    When user can verify the text "NUEVA CAMPAÑA MAESTRA"
    When user can verify the text "Asociar campañas"
    When user can verify the text "Selecciona las campañas que se asociarán a" in campaign
    When user can verify the text "esta campaña." in campaign
    When user verify the close Icon "<step=3>"
    And user click on the "Asociar Campaña" button 

    # And user check the campaign api data
    And user want to search the campaigns by using the search box
    And user select one "automation campaign" in the below dropdown in step3
    And user select one "automation testing -1" in the below dropdown in step3
    And user click on the "ASIGNAR" button

    And user click on the "Ver mas" button in campaign
    # And user click on the "CERRAR" button

    And user check the selected campaign api data
    # Then user click on the "SIGUIENTE" button
    # And user click on the "Filtros" button
    
    
    # Scenario: step 4 testcases for creation of campaign

