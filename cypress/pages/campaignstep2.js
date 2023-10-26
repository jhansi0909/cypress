class campaignStep2{

    agentDropdown='#still-open-drop-down-agent_user'
    dropdownElement='#scroll-agent_user .cursor-pointer'
    crossIcon1='#parent-drop-down-agent_user-select svg'
    
    selectAgentName(){
        cy.get(this.agentDropdown)
        .get(this.dropdownElement).each(($el,index)=>{
            if(index==0){
                $el.click()
            }
        })
    }
    checkCrossIcon(){
        cy.get(this.crossIcon1).should('have.css','border-color','rgb(229, 231, 235)')  
    }
}
export default campaignStep2