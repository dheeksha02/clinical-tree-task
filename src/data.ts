export interface TreeNode {
  id: string;
  children: TreeNode[];
  isExpanded?:boolean;
  isActionMenuClicked?: boolean;
}

export interface DropInfo {
    targetId: string;
    action?: string;
}

export var demoData: TreeNode[] = [
  {
    id: 'Hospital A',
    children:[{
      id: 'Shoulder',
      children:[]
    },{
      id: 'Knee',
      children:[]
    }]
  },
  {
    id: 'Hospital B',
    children:[
      {
        id: 'Anxiety',
        children:[]
      },
        {
        id: 'Depression',
        children:[]
      }
    ]
  }
]