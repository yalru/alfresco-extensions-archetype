(function(){YAHOO.Bubbling.fire("registerAction",{actionName:"onActionSendAsEmail",fn:function a(b){this.modules.actions.genericAction({success:{message:this.msg("message.sendAsEmail.success",b.displayName,Alfresco.constants.USERNAME)},failure:{message:this.msg("message.sendAsEmail.failure",b.displayName,Alfresco.constants.USERNAME)},webscript:{name:"mycompany/sendDocInEmail?nodeRef={nodeRef}&userName={userName}",stem:Alfresco.constants.PROXY_URI,method:Alfresco.util.Ajax.GET,params:{nodeRef:b.nodeRef,userName:Alfresco.constants.USERNAME}},config:{}})}})})();