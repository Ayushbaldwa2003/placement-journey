## 🔹 Leetcode 785 Is Graph Bipartite?
 
BFS Solution:-

```Java
class Solution {
    public boolean isBipartite(int[][] graph) {
        boolean []visited=new boolean[graph.length];
        int []color=new int[graph.length];
        Queue<Integer> qu=new LinkedList<>();
        for(int i=0;i<visited.length;i++){
            if(!visited[i]){
                qu.add(i);
                int colour=1;
                color[i]=1;
                while(!qu.isEmpty()){
                    int size=qu.size();
                    for(int j=0;j<size;j++){
                        int pop=qu.remove();
                        visited[pop]=true;
                        for(int k=0;k<graph[pop].length;k++){
                            int node=graph[pop][k];
                            if(!visited[node]){
                                qu.add(node);
                            }
                            if(color[node]==0){
                                if(colour==1){
                                    color[node]=2;
                                }else{
                                    color[node]=1;
                                }
                            }else{
                                if(color[node]==colour){
                                    return false;
                                }
                            }
                        }
                    }
                    if(colour==1){
                        colour=2;
                    }else{
                        colour=1;
                    }
                }
            }
        }
        return true;
    }
}


DFS Solution:-