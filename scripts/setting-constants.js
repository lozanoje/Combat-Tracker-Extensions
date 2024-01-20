
export const SETTINGATTRIBUTE={  

  OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT:             {ID:'OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT'              ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_ADD_COMBATANTS_HIDDEN:         {ID:'OPTION_COMBAT_TRACKER_ADD_COMBATANTS_HIDDEN'          ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_ENABLE_NAME_MASKING:           {ID:'OPTION_COMBAT_TRACKER_ENABLE_NAME_MASKING'            ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_ADD_COMBATANTS_NAME_MASKED:    {ID:'OPTION_COMBAT_TRACKER_ADD_COMBATANTS_NAME_MASKED'     ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false}, 
  
  OPTION_COMBAT_TRACKER_REVERSE_INITIATIVE:            {ID:'OPTION_COMBAT_TRACKER_REVERSE_INITIATIVE'             ,TYPE:'Boolean' ,DEFAULT:''    ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:true },        
  OPTION_COMBAT_TRACKER_ENABLE_DUPLICATE_COMBATANT:    {ID:'OPTION_COMBAT_TRACKER_ENABLE_DUPLICATE_COMBATANT'     ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:true },
  
  OPTION_COMBAT_TRACKER_ENABLE_INITIATIVE_INPUT_FIELD: {ID:'OPTION_COMBAT_TRACKER_ENABLE_INITIATIVE_INPUT_FIELD'  ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false}, 
  OPTION_COMBAT_TRACKER_INITIATIVE_INPUT_MIN:          {ID:'OPTION_COMBAT_TRACKER_INITIATIVE_INPUT_MIN'           ,TYPE:'Number'  ,DEFAULT:1     ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_INITIATIVE_INPUT_MAX:          {ID:'OPTION_COMBAT_TRACKER_INITIATIVE_INPUT_MAX'           ,TYPE:'Number'  ,DEFAULT:100   ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  
  OPTION_COMBAT_TRACKER_SHOW_DISPOSITION_FOR_GMS:      {ID:'OPTION_COMBAT_TRACKER_SHOW_DISPOSITION_FOR_GMS'       ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false}, 
  OPTION_COMBAT_TRACKER_SHOW_DISPOSITION_FOR_PLAYERS:  {ID:'OPTION_COMBAT_TRACKER_SHOW_DISPOSITION_FOR_PLAYERS'   ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  
  OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT_BY_VISIBILITY:   {ID:'OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT_BY_VISIBILITY'  ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT_BY_DISPOSITION:  {ID:'OPTION_COMBAT_TRACKER_OBSCURE_COMBATANT_BY_DISPOSITION' ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  
  OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_FRIENDLY:     {ID:'OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_FRIENDLY'      ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_NEUTRAL:      {ID:'OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_NEUTRAL'       ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_HOSTILE:      {ID:'OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_HOSTILE'       ,TYPE:'Boolean' ,DEFAULT:''    ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_SECRET:       {ID:'OPTION_COMBAT_TRACKER_SHOW_INITIATIVES_SECRET'        ,TYPE:'Boolean' ,DEFAULT:''    ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_FRIENDLY:      {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_FRIENDLY'       ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NEUTRAL:       {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NEUTRAL'        ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_HOSTILE:       {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_HOSTILE'        ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_SECRET:        {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_SECRET'         ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NPCS:          {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NPCS'         ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false},
  OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NON_NPCS:      {ID:'OPTION_COMBAT_TRACKER_SHOW_COMBATANTS_NON_NPCS'     ,TYPE:'Boolean' ,DEFAULT:true  ,CATEGORY:'settings.categories.COMBATTRACKER_OPTIONS' ,SCOPE:'world' ,CONFIG:true, REQUIRESRELOAD:false}
};

