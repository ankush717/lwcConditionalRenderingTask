trigger LeadTri on Lead (before update ) {
    
   System.debug('lead  trigger is running on updation');

    for(Lead lr:trigger.new)
    {
        if(String.isBlank(lr.Industry))
        {
            lr.addError('THE INDUSTRY FIELD CANNOT BE  BLANK');
        }
        
    }

}