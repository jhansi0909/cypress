import { When } from "@badeball/cypress-cucumber-preprocessor"
import campaignStep2 from "@pages/campaignstep2"
const step2=new campaignStep2
import agentData from "@pages/files/agent"
const Agent=new agentData
When('user select one {string} in the below dropdown in step2',()=>{
step2.selectAgentName()
})
When('also get one crossIcon check the crossIcon color {string} in step2',()=>{
    step2.checkCrossIcon()
})
When('user verify the agent name api data',()=>{
Agent.agentApiData()
})
When('user check the FE agent data and BE agent data',()=>{
    Agent.agentFeData()
})