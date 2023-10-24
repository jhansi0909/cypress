Feature:course homepage
    Background:
        Given I navigate to course static page
    Scenario: valid static page homepage
#     login page
When the user enter the name in "Email" input field
When the user enter the name in "Password" input field
        Then user click on the "Login" button 
        # statis page
        When user can verify "Admistracion" in the dashboard page       
        When user click on "Instructor" in the dashboard page
        When user click on "Actividades" in the instructor dashboard
        When user click on "Cursos" in the instructor dashboard
        When user click on "NUEVO CURSO" button in home page 
        When user can verify the text "Nuevo curso"
        When user can verify the text "Querido instructor, al crear tu curso obtendrás los siguientes beneficios:"
        When user can verify the image in first box
        When user can verify the text "Una landing page exclusiva para su promoción."
        When user can verify the image in second box
        When user can verify the text "El curso se publicará en la página web."
        When user can verify the text "También es necesario que tengas la siguiente información para poder crear tu curso:"
        When user can verify the image in third box
        When user can verify the text "Una proyección de gastos y apróximado de participantes."
        When user can verify the image in fourth box
        When user can verify the text "Aprobación de las áreas o equipos internos del país."
        And user verify the import note orange color box
        When user verify the close Icon "<step=0>"
        Then user click on the "INICIAR AHORA" button 

# Scenario: step 1 testcases for creation of course

#         When user can verify the text "NUEVO CURSO"
        When user can verify the text "¿Qué curso estas organizando?"
        When user verify the close Icon "<step=1>"
        # When user verify the "<step=1>" button
      
#       # verifying the next buton   
        When user click on nex button before filling the input fields we getting all input fields change the color "red"
        When user click on the "SIGUIENTE" button 
        When check all the input fields change to red color

        # user select the organizer
        When api getting data "organizer"
        When 1.user click on organizer input
        When we have to open one dropdown. In that dropdown contains two options. 
            | Option            |
            | Soy el organizador |
            | Otra persona lo va a organizar |
        When user want to select "Otra persona lo va a organizar"
        When we have to open one model.
        When In that popup model there are two buttons: close and clear buttons.
            | Button   |
            | CERRAR   |
            | CANCELAR |
        When user click on "CERRAR" button Then the modal should be closed
        When user click on "NUEVO CURSO" button in home page
        When user click on the "INICIAR AHORA" button
        When 1.user click on organizer input
        When user want to select "Otra persona lo va a organizar"
        And user click on "CANCELAR" button Then only the popup model should be closed
        When 1.user click on organizer input
        When user want to select "Soy el organizador"

        # user select any course
        # When that value is filled the input and then change the color "Green". and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed red. then user want to select "other organizador".we have to open one model. In that popup model there are two buttons: close and clear buttons. user click on "CERRAR" button the total step model was closed. and then user click on "CANCELAR" button it just closed that popup model only.

        # user select any course
        When api getting data "course"
        When 1.user click on course input we have to open one dropdown. In that dropdown contains list of course types.
        When user select any of course
        #  that value filled the input and then change the color "Green". and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red".

        # user select the format
        When api getting data "format"
        When 1.user click on format input we have to open one dropdown. In that dropdown contains two options.
        When user select "Presencial" and then user want to select "En Linea". we have to open below one input that is zoom link input.
        # that value filled the input and then change the color "Green". and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red". and then user want to select "En Linea". we have to open below one input that is zoom link input. the zoom link only accept corect format. it changes color "green" otherwise we have to provide wrong format it changes the color "red".
 ## user select the visibility
        When api getting data "visibility"
        When 1.user click on visibility input we have to open one dropdown. In that dropdown contains two options. 
        When user select "Private" and then user want to select "Public" click on public option
        # that value filled the input and then change the color "Green". and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red". and then user want to select "Public" click on public option.

      When user put on the mouse notification icon
      When all the input fields changes to green color and get crossIcon
    When user click on the "Guardar y continuar" button
    When user click on save and continue button the data will save until we have filled. and save and continue button name also changed and also change the color "green"
    When user click on the "SIGUIENTE" button

        # When user verify the "<step=2>" button
        # When user verify the "<step=3>" button
        # When user verify the "<step=4>" button

# # Scenario: step 2 testcases for creation of course

        When user can verify the text "NUEVO CURSO"
        When user can verify the text "Ubicación / Alcance"
        When user verify the close Icon "<step=2>"
        When user can verify the text "Elige la ubicación geográfica donde ocurrirá tu curso o la zona geográfica donde está la audiencia de tu curso"

When user click on the "SIGUIENTE" button
When all the input fields changes to red color

#   # user select the region data 

  When api getting Region data
    When user verify the region input
    When user click on region input we have to open dropdown.
    When In that dropdown contain the list of regions. which is come from the database. 
    When user want to select any one of the region.
#     #  that value is filled the input field and changes the color "green" and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red".

#     # user select the country data

    When api getting country data
    When user verify the country input
    When user click on country input we have to open dropdown.
    When In that dropdown contain the list of realted countries above selected region. which is come from the database.
    When user want to select any one of the country.
#     #  that value is filled the input field and changes the color "green" and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red".

# # user select the state data

    When api getting state data
    When user verify the state input
    When user click on state input we have to open dropdown.
    When In that dropdown contain the list of realted states above selected country. which is come from the database.
    When user want to select any one of the state.
#     # When that value is filled the input field and changes the color "green" and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red".

# # user select the city data

    When api getting city data
    When user verify the city input
    When user click on city input we have to open dropdown.
    When In that dropdown contain the list of realted cities above selected state. which is come from the database.
    When user want to select any one of the city.
#     # When that value is filled the input field and changes the color "green" and we get one crossIcon. and also we have to clear the previously selected option click on the "cross" icon the total input color changed "red".

# #user verify the center input field

    When user verify the center input.user click on the center input field.
    When the user clicks on the one option

#     When it contain one add new button.
#     When user click on the ' + Agregar nuevo' button
#     When user can add the center names.
#     When user click on the "Guardar" button
#     When the center input field prefilled the center name.
 
#  #user verify the direction input field

 When user verify the direction input field.
 When user can add the direction.

 When user clear the region input field click on the crossIcon that can remove whole data in that step

 When user click on the center input.
 When user want to select one center in the below dropdown
#  When the above all input fields are prefilled 
 When all the input fields changes to green and get crossIcon 

    When user click on the "SIGUIENTE" button

## user verify the step-3

        When user can verify the text "NUEVO CURSO"
        When user can verify the text "Introduce las fechas y horarios"
        When user verify the close Icon "<step=3>"

# # verity the calendar

When the user verifies that the calendar icon is present
When the user clicks on the calendar icon
Then the calendar should open
# # When the user verifies that the calendar displays the current date
When the user verifies the left arrow and right arrow
When the user click on the left arrow we have to move previous month
When the user click on the right arrow we have to move next month
        When the user verifies the presence of the "years" dropdown
        When the user clicks on the "years" dropdown
        Then the years dropdown should open
        When the user verifies the presence of the left and right arrows
        When the user clicks on the "left arrow". the years dropdown should display previous years
        When the user clicks on the "right arrow". the years dropdown should display next years
        When the user verifies the presence of the "months" dropdown
        When the user clicks on the "months" dropdown
        When the months dropdown should open
        When the user selects a month from the dropdown
        When user select the date 
And user click day "1" and select the "11:15" to "13:30" time
When user check the changes color to "green"
        When user click on the "Agregar nuevo" button
  # user enter the date manually
        Then user click on "2" clender and select +"7" from the current date
        And user click day "2" and select the "15:15" to "25:30" time
        And user check day "2" and click "X" icon we have clear the data on that day
        When user verify the "2" all the data are clear or not user click on "X" icon
        And user check day "2" and click "-" icon we have to delete the total day

        When user click on the "SIGUIENTE" button

#  user verify the  step-4

        When user can verify the text "NUEVO CURSO"
        When user can verify the text "Información extra"
        When user verify the close Icon "<step=4>"

        When the user verifies the presence of the "Nombre" input field
        When the user enter the name in "Nombre" input field
        And the "Nombre" input field accept only "string"
        When the user verifies the presence of the "Teléfono" input field
        When the user enter the name in "Teléfono" input field
        And the "Teléfono" input field accept only "number"
        When the user verifies the presence of the "Correo electrónico" input field
        When the user enter the name in "Correo electrónico" input field
        And user can verify the "Seleccionar Gira" input
        And user click on "Seleccionar Gira" input field
        And the user verifies the presence of "Seleccionar Gira" open dropdown
 # When user want to select "Si" 
        When user want to select "No" option
        # When user can verify the "Seleccionar" input
        # And user click on "Seleccionar" input field
        # And the user verifies the presence of "Seleccionar" open dropdown

   When the user clicks on the "SIGUIENTE"

# user verify the step-5


When user can verify the text "NUEVO CURSO"
When user can verify the text "Proyección "
When user verify the close Icon "<step=5>"
        # And user click on "Participantes" input field
        When user type the "Participantes totales" input field
        When user type the "¿Cuántas participantes del curso estimas que vendrán del taller introductorio pautado?" input field
        When user type the "Regular" input field
        When user type the "Repitentes" input field
        When user type the "Referidos membresía" input field
        When user type the "Repitentes membresía" input field
        When user type the " Profesorado de Yoga" input field


        When api getting data Gastos

        When user get all categories data

        When user caluculate the total

        When user can verify the text "Gastos directos"
        When user click on the "Gastos directos" button

        # When the user clicks on the "Si"

        When user click on the " Agregar nuevo" button

        When user can verify the text "Nuevo gasto"
        # When user verify the close Icon "<step=6>"

        # When the user verifies the presence of the "Categoria" input field
        # When the user verifies the "Categoria" text
        When the user clicks on the "Categoria" 
        When the user clicks on the "Materiales"

# i am writing the verifying the search input field

        # When user click on the ' + Agregar nuevo' button
        # When user can add the category names.
        # When user click on the 'Guardar' button in gastos model
        # When user search the recently added category data by using the search input fields and user select the above search category data

        When the user verifies the "Tipo" text
        When the user clicks on the "Tipo"
        And the user verifies the presence of "Tipo" open dropdown
        When user can verify the text "Adelanto"
        When user can verify the text "Reembolso"
        When user can verify the text "Pago desde administración"

#  user click on the "adelanto"
        When the user clicks on the "Adelanto"
        When user add date manually previous date "09" "09" "23"
        When It does not accept Previous date it change the color to 'red'
        When user clear the previously enter date
        When user add date manually future date +"7" from the current date
        When It accept "future date" it change the color to 'green' and get crossIcon
        When user can add the amount in "Monto Adelanto" input field
        When It accept amount it change the color to 'green' and get crossIcon
        When the user clicks on the "Selecciona una op"
        When the user clicks on the "Nagaraju Payyavula" 
        When It accept name it change the color to 'green' and get crossIcon
        When the user clicks on the check box "#checkbox-is_disclaimer_accepted"
        When user want to type the description

# user click on the "Reembolso"
        # When the user clicks on the "Adelanto"
        # When the user clicks on the "Reembolso"
        # When the user clicks on the "ADJUNTAR FACTURA"
        When the user clicks on the "GUARDAR"

When user check the apidata and frontend data
  
  When user check the amount "Gastos directos estimados". it is less than <4000
#   When user want caluculate the balance
 
      And the "SIGUIENTE" enable blue color
      When the user clicks on the "SIGUIENTE"

#user verify the step-6

     When the user clicks on the edit icon

      When the user verifies the presence of the "Teléfono" input field
      When user edit the "Teléfono" number
      When the user enter the name in "Teléfono" input field
      When the user clicks on the "GUARDAR Y CERRAR"
      When the user clicks on the "ENVIAR SOLICITUD"
      When the user clicks on the crossicon


        # When user click on "¿Quién es el organizador?"
# When user select an option "Soy el organizador"
# const n=[0,1,2,3,4]
# When user click on cross Icon "<input=0>"
# When user click on "¿Quién es el organizador?"
# When user click on '¿Quién es el organizador?'
# When user click on input
# Scenario:valid
# # When user click on instructor
# When user click on "Instructor" in the dashboard page
# When user click on "Actividades" in the instructor dashboard
# When user click on "Talleres" in the instructor dashboard
# When user click on "NUEVO TALLER" button
# When user verify the "Nuevo taller" heading in static page

# When verify the new course button open static
# When a.Static page is displayed,verify the heading,text and boxes
# When user verify the neuvo curso heading
# When user verify the text first part
# When verify the first box dimenshions and verify the image. It is displayed like chains and verity the text is present in first box
# When verify the second box dimenshions and vefity the image. It is displayed like file and verify the text in second box
# When vefity the text second part
# When verify the third box dimenshions and verify the images. which is displayed like database and avatar images and verify the text in the third box
# When verify the fourth box dimenshions and verify the image. which is displayed like puzzle card and people and also text in the fourth box
# And One import note is there orange color box
# When verify the close Icon "<step=0>"
# Then verify the start now button




# # Scenario: valid course homepage
# # When b.verify the close Icon "<step=1> in step1"
# # When verify the heading of the course in step1
