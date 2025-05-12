# 🍨 Section15 - Troubleshooting

## Application Failure


```mermaid
graph BT
  DB@{shape: circle} ~~~ DB-Service
  DB-Service@{ shape: tri } --> WEB
  WEB@{shape: circle} --> WEB-Service
  WEB-Service@{ shape: tri } --> User@{ img: "https://img.icons8.com/?size=100&id=108652&format=png&color=000000", w: 60, h: 60}
```


애플리케이션 접근에 문제가 발생. 먼저 curl을 사용하여 node port IP로 접근 web server에 접근 가능한지 확인.


다음으로 service 확인. web pod의 서비스를 발견하였는가? 발견하지 못했다면 서비스를 describe하여 endpoint를 확인하는 것이 좋음. 서비스에 구성된 selector를 pod에 있는 selector와 비교하여 일치하는지 확인.


다음으로는 pod 자체 확인하고 작동 중인지 확인. pod의 상태와 재시작 횟수를 통해 pod의 애플리케이션이 실행 중인지 알 수 있음. describe 명령어를 사용하여 pod와 관련된 이벤트 확인. log 명령어를 사용하여 애플리케이션의 로그 확인. 장애로 인해 pod가 재시작되는 경우, 현재 버전의 컨테이너를 실행 중인 pod의 로그에 마지막으로 실패한 이유가 반영되지 않을 수 있음. 그러므로 `-f` 옵션으로 pod가 재시작할 때까지 기다리거나 `--previous` 옵션으로 이전 pod의 로그를 확인.


다음은 이전처럼 DB서비스의 상태를 확인하고 마지막으로 DB pod 자체 확인.


[https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/)


## Practice Test - Application Failure

1. 간단한 2 계층 응용프로그램은 alpha 네임스페이스에서 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/589d7af2-3bdd-4c9c-a588-ac45518b06af/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6EVGJG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBxBmmwQkOJNFGb4xblMDRZ4Vn3k0W3z%2Fsehpu3ObXbZAiEAj35VDFN0UEHxFcEAPAT%2FxPG%2BTiq%2B%2F3nPy8O7EdXAUCMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiz9fzBx8Gz%2FKpNBCrcA%2F3c5Ado0fIkjaUGP5Cmx2mVH6MNDdirAqUY%2FqzQr1aICQhYXTBP4UyojEh7HC%2B4s9eD4sK3wqb86sukNWrbo0ri1C%2BxMUlWhCwXq4CRPjo1UsytfHQ7MfRn01l4SNhabeu9hYQeN6Jk4pJ1DpUZd3JiKTg9CAfNSEzyJMxnoBI6mkhkSMMeakv0q17CNtAIu31iYFGdrGt0NX3ooZWKwXhqUWWXQhAzBtNFTk9OLOBsNHDYmIHDbNV1VVXkOvyZEKJ1md2QMP3Gzh4%2FNE3p6H406yWzssGObjXPWE37GbEuHznDoXyAjisIQoYOCCEyC3lxFPpKW59m%2FlnzbVwyu56MhNJleqJE09XKHdPS3WS2hD%2BmgFaDJBAZLD%2FISfe49cKwvwZzu0Ps2vb44a3qse3Ib%2FARAsprNwsDIoiKm51tl9GrVUClY1mJFIpEzFK0PiNYyMs%2FCOk%2FB%2BXRvoMNaxUD32b3OlgZDzutBctrcpvRejZfpudWMR%2FOdyBb%2Bixp4d98SN%2Fu3ddfNrrKbl6iijrJHf1TMj2tLTLBbJwTZCx2brgOEF1wg1uRQA0bFl%2FX3PbDKF2YmDuv4Z10ct%2FhzDa4Hp8G0PvnD3gSGCYOiBOPkMqg5K0ykNbH0KGnMN%2BDiMEGOqUBbVbK7k0ErW3gbKgEp7hTmTi9WTiPqEHOgJ0Du0LC9knr91u51oUwky3IwCj3ciNlPfk0wwiNVJbCrq1zrdSIbrw4cej%2FSbg5S0m%2Bze59YtPXn1EFeqqi2Q8ekpZUwF%2Bl%2FwYVmBBSW%2FdaEeR%2ByMWs6LB1OUMXOIGXjl1iLqGDg8UsHmFLjaO7Pfi86dRSorF%2BYECelZvt%2B4eo09z0QuczxHZpBeVS&X-Amz-Signature=ec77ca3c9f4542e0cae760a1e41b6546aa851a69edee778f855d09953fce1a85&X-Amz-SignedHeaders=host&x-id=GetObject)


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/ae7912dd-e66e-487e-affc-c1bb880f3aaa/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6EVGJG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBxBmmwQkOJNFGb4xblMDRZ4Vn3k0W3z%2Fsehpu3ObXbZAiEAj35VDFN0UEHxFcEAPAT%2FxPG%2BTiq%2B%2F3nPy8O7EdXAUCMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiz9fzBx8Gz%2FKpNBCrcA%2F3c5Ado0fIkjaUGP5Cmx2mVH6MNDdirAqUY%2FqzQr1aICQhYXTBP4UyojEh7HC%2B4s9eD4sK3wqb86sukNWrbo0ri1C%2BxMUlWhCwXq4CRPjo1UsytfHQ7MfRn01l4SNhabeu9hYQeN6Jk4pJ1DpUZd3JiKTg9CAfNSEzyJMxnoBI6mkhkSMMeakv0q17CNtAIu31iYFGdrGt0NX3ooZWKwXhqUWWXQhAzBtNFTk9OLOBsNHDYmIHDbNV1VVXkOvyZEKJ1md2QMP3Gzh4%2FNE3p6H406yWzssGObjXPWE37GbEuHznDoXyAjisIQoYOCCEyC3lxFPpKW59m%2FlnzbVwyu56MhNJleqJE09XKHdPS3WS2hD%2BmgFaDJBAZLD%2FISfe49cKwvwZzu0Ps2vb44a3qse3Ib%2FARAsprNwsDIoiKm51tl9GrVUClY1mJFIpEzFK0PiNYyMs%2FCOk%2FB%2BXRvoMNaxUD32b3OlgZDzutBctrcpvRejZfpudWMR%2FOdyBb%2Bixp4d98SN%2Fu3ddfNrrKbl6iijrJHf1TMj2tLTLBbJwTZCx2brgOEF1wg1uRQA0bFl%2FX3PbDKF2YmDuv4Z10ct%2FhzDa4Hp8G0PvnD3gSGCYOiBOPkMqg5K0ykNbH0KGnMN%2BDiMEGOqUBbVbK7k0ErW3gbKgEp7hTmTi9WTiPqEHOgJ0Du0LC9knr91u51oUwky3IwCj3ciNlPfk0wwiNVJbCrq1zrdSIbrw4cej%2FSbg5S0m%2Bze59YtPXn1EFeqqi2Q8ekpZUwF%2Bl%2FwYVmBBSW%2FdaEeR%2ByMWs6LB1OUMXOIGXjl1iLqGDg8UsHmFLjaO7Pfi86dRSorF%2BYECelZvt%2B4eo09z0QuczxHZpBeVS&X-Amz-Signature=5853609d7c27ee38609f0d9aa3c075eced13edbaab103924c9f799d674e9d2f2&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k get all -n alpha
    NAME                                READY   STATUS    RESTARTS   AGE
    pod/mysql                           1/1     Running   0          21s
    pod/webapp-mysql-5c4c675768-5xrpw   1/1     Running   0          21s
    
    NAME                  TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    
    service/mysql
             ClusterIP   10.43.134.208   <none>        3306/TCP         21s
    service/web-service   NodePort    10.43.209.34    <none>        8080:30081/TCP   21s
    
    NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-mysql   1/1     1            1           21s
    
    NAME                                      DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-mysql-5c4c675768   1         1         1       21s
    ```


    기존에 생성된 service이름은 mysql. 아키텍처에는 mysql-service로 되어있으므로 이를 수정.


    ```yaml
    controlplane ~ ➜  k get svc -n alpha mysql -o yaml > mysql-svc.yaml
    controlplane ~ ➜  vi mysql-svc.yaml # metadata의 name 수정.
    controlplane ~ ➜  k delete svc -n alpha mysql
    controlplane ~ ➜  k apply -f mysql-svc.yaml
    ```

2. beta 네임스페이스에 같은 2-tier 애플리케이션이 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cd4ebe10-dd16-4e22-9b8d-e488b94023cb/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URLBDVWT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCjUGOoPAsNCGuoehm836qbRvaHWFolV%2FMNwqLoIpA5owIgZdDsuM%2FyLgHx%2FXOfwJz4wV%2BloYyT57oAm6XB8aopP7kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaM7wi0%2FVR0sCg2PyrcA8HQ8vMQ%2BR7knknywuUfaGxbytCUeVXcOxBPPyJqvUZkQlKRdwOSDB%2BqZqwCFMDQfxCn56V%2F2Ejparp2Pbwsie7TtuHuikQJZjA2zWbWqEXZZVBMl59J5KzMAtbissICLcOIJ%2B94VzAzQg73NIBZ6kuqa%2FrWD0WRqJXoUBhMKImxB73pG24sNrCAde0wjvypuolpwEsg6kiiZC4vGhesmp84X2B1w1MHQ2tN4QpJ2wzwBhyIwpiB4CGFEs8EFChgR%2Fj931RuufAVcsQxZmfME8V9d361gvmpnQznvQ23wrvUoAUfDW8WMlshN5SQLqmupW4L%2BucR62HzNP9lCNpjvi9TzWqV4NevKSVlGYSu98FT6pd0VyJUHBSpBZtYN9qkuiMD%2FvbACakYUZJsAU2VO3th%2B0CCaC2O63CdbJ9H674VMNqKUFaCRpqfSW2kTcpS7exFpFwaKnPqYpERedDsp1kk6S%2F7BUHZEVMkGR3VWqQ%2FcnMeu4cknl5A0Z6v2%2FtYoAvlvrpWysAPXFrbxg6fE1SxrJk0szSqu5Ew6vw9tdoKOUotgi1EguovtCPoDaflBe8chQWVvHfF6hOT5u8cn3lgAE%2FkhU%2Bhx1ekmBxkBNLeHRyQX6e0PmGLEiuEMOeDiMEGOqUBaZdNTKQPXxE0Cw44LIPCH7BPrU8tCoVt16zdTdEiO3hHmXDq23oHK9hcp4ycc%2FRgz7o5M8%2FcWakw0VhcUOrRP8x98wgPcTUn2Y%2BiXS7QgnfI6Ge1uPSFq8%2BdvZk4bCAtMcHuEchEUspPRi10lkJZ1CdlcVvWC7LphxJoThkSxVR1%2Byowt%2BWNDnA3DOddQJ2VY7QdyYIkNRuAUq9lmdYeENxG7Cf2&X-Amz-Signature=4f9934eb80fdc03a3805946d7c064975deab8f15f4763db310a35e442dc3d8e6&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k get all -n beta 
    NAME                                READY   STATUS    RESTARTS   AGE
    pod/mysql                           1/1     Running   0          21s
    pod/webapp-mysql-5c4c675768-smch7   1/1     Running   0          21s
    
    NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    service/mysql-service   ClusterIP   10.43.243.177   <none>        3306/TCP         21s
    service/web-service     NodePort    10.43.198.16    <none>        8080:30081/TCP   21s
    
    NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-mysql   1/1     1            1           21s
    
    NAME                                      DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-mysql-5c4c675768   1         1         1       21s
    
    controlplane ~ ➜  k describe po -n beta mysql 
    Name:             mysql
    ......
        
    Port:           3306/TCP
    
        Host Port:      0/TCP
        State:          Running
    ......
    
    controlplane ~ ➜  k describe svc -n beta mysql-service 
    Name:                     mysql-service
    Namespace:                beta
    Labels:                   <none>
    Annotations:              <none>
    Selector:                 name=mysql
    Type:                     ClusterIP
    IP Family Policy:         SingleStack
    IP Families:              IPv4
    IP:                       10.43.243.177
    IPs:                      10.43.243.177
    Port:                     <unset>  3306/TCP
    
    TargetPort:               8080/TCP
    
    Endpoints:                10.22.0.11:8080
    Session Affinity:         None
    Internal Traffic Policy:  Cluster
    Events:                   <none>
    
    controlplane ~ ➜  k edit svc -n beta mysql-service # mysql pod의 port와 불일치하므로 targetPort 수정
    ```

3. gamma namespace에 같은 2-tier 애플리케이션이 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 반응하지 않거나 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21708f85-5d81-4c4a-8d94-3feda2068e48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6JPKXN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICXYYCMs3t32KbyK5qhLZXhNwBhfu0WOtOTTxId2q11QAiAQiAGYZAyJtzxJ95aJ9sQvHdg0WKZNETUfRYnWaGibgCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovCvWjmqpvvfmoEKKtwDfexJIBJ172tH6JI4CGU9ste1rgLthGB6vHPzxe2m7y7%2FXzmAIYu493Xl%2FFtcI9xYG1u6IDwm0i%2FxOEE9mfjikmorDKaequbFgHW1ahKdHMA4PrrVGZYHviXwq8Pdyh3gD8fJ%2Bzqn1PXt4kcfcJLHpEMN51C%2B6ki5BtBwZhC%2Bkz%2FCY1P9hUjBSbOG6mtqygmWvLs3qfCGz%2BDen1D40iNxMZX%2B4i3OePIi1bZa4AmYY3cwAAAS3Do05NYpFHiBWX%2B39nLvyloeRtkG1Hb%2FoN%2FT2Kkz3nFcLuLpu0l3xsgowZLNXry9MVkscwiLjE0sMSysOqG18j3kswKso89k0qD4EEbnp5ipLG7cquLdSfaXFey6JFazLdRra4vRZCyRy%2FkJ3l5t6NgFaQW6dN2gDHiqMXKYJffg%2FDwpFmnFz7%2BShTds%2B0ZsCA5TC8xd2WZgBfCDaWwEoVEgVlZxFEJuS%2B%2B1q4hobfgmoopkCKVDem2IGkpxbARt18hRfgd4JOohDgb8f4iDXmwb%2FoOTjbIIhdLkDLkqu%2Fpbah82%2Bj4u%2Fu73yKcylGA1N6ZiOL5a1AhahvS%2Bm%2BKuRbHW1K0GkiAgjuR3%2BSwZ0LmLnBIE2rg5OaUmjBPSNhvw7IBsZSStdb8w3YOIwQY6pgF%2BONXHejxWK4crHukTa3JkJlXBgGWTBI%2B2BOjLmuBy1KmEMlTlMfMrOrPCRJ1m0H55uK18YhFOlkWo85slUGbXeKEwCC2sGIFD2frq99NULkDojG3sepefiv47STjJv7qa2Ce0TNqaaduh1xyKFkGbOiaF3yLgsNGU%2FQipIzVyiNyl6CXSrpmfkTo%2BDgZRVm7ll%2Biqx4egWzsUEh%2FbtxpUOo7UrSVi&X-Amz-Signature=01a6487678efdc66a03a978efc64735cdfc9791f6bddded37499f35f838249c5&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k get all -n gamma
    NAME                                READY   STATUS    RESTARTS   AGE
    pod/mysql                           1/1     Running   0          4m
    pod/webapp-mysql-5c4c675768-8ww9w   1/1     Running   0          4m
    
    NAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
    service/mysql-service   ClusterIP   10.43.84.214   <none>        3306/TCP         4m
    service/web-service     NodePort    10.43.167.25   <none>        8080:30081/TCP   4m
    
    NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-mysql   1/1     1            1           4m
    
    NAME                                      DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-mysql-5c4c675768   1         1         1       4m
    controlplane ~ ➜  k describe po -n gamma mysql 
    Name:             mysql
    Namespace:        gamma
    Priority:         0
    Service Account:  default
    Node:             controlplane/192.168.27.174
    Start Time:       Wed, 09 Apr 2025 03:38:24 +0000
    
    Labels:           name=mysql
    
    Annotations:      <none>
    Status:           Running
    IP:               10.22.0.15
    controlplane ~ ➜  k describe svc -n gamma mysql-service 
    Name:                     mysql-service
    Namespace:                gamma
    Labels:                   <none>
    Annotations:              <none>
    
    Selector:                 name=sql00001
    
    Type:                     ClusterIP
    IP Family Policy:         SingleStack
    IP Families:              IPv4
    IP:                       10.43.84.214
    IPs:                      10.43.84.214
    Port:                     <unset>  3306/TCP
    TargetPort:               3306/TCP
    Endpoints:                
    Session Affinity:         None
    Internal Traffic Policy:  Cluster
    Events:                   <none>
    
    controlplane ~ ➜  k edit svc -n gamma mysql-service #selector 오류
    service/mysql-service edited
    ```

4. delta 네임스페이스에 같은 2-tier 애플리케이션이 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e2c5b54a-2cdb-4456-a5eb-c53c3ebe8c58/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISNRKTP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDPwb%2BTMdkbnLmsr5ixo4VicV2ialfUw52lRg%2Bzs7xKZwIhAPOjMtYGTNUHkeJtfFiC1cHgvSC06DhjDHbnmZa0jq4yKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyVVXekpLvzurpOKUq3AOD6mNkaB9%2BlW8uj9y3fBI2xV4uvJQsxo%2BPJ5d3EiieqTct2CA7Pf7IDcVe6JUO1zfp7Yi1YLlisPcDQ2gYmDGhDBidDRqhxsNBZcKYc2VNUKx7I4Li64Q2k6Hvaxb0u6qxrQDMjO2H9S1zPMt8i7xepnh4iNatwKGf%2BcPJA3LfqhlkRaiAtNSLhT%2FwP31P5Ugg81OjOthn3XdxmpTe3zlfhD92P%2FGfCBYaqbJoj759xptLtJXmh0paa5aMtNqyxqTRW53fGwj0TiODagX56bkv3wyaQDfevV5aZKCP5hrnqp9LhsIRhB0zzCc%2Fx7jT%2BSul59FzDae%2Bh68Rz8iP8wvAhKZg8RmFQmGayKUhe047Wl7Jf3nqU4F%2F3kCEcQ72e1wZNJFH4nRCie6vOrqpIdQFAc2VEbAFd2ToxNFGqHcbYSpwTzwRHwUgarpWg74vyKRb%2B6Tu7RrOFVpWw8ON3JBPSaaOkRI4t4yKma5sKpYd8xeTxPKpqmCtreLxwaewZKiVO0s16%2F%2BDuseQAJVhMnfieyFp1q59pdOuJk6IGd18TtjwgseK8A4famMSRVPM3sa5aUOvowdohSRVPkK4wWuPIJNvj5r0G9ac%2BnzjVRhh49RvyIw9VgIO9WXU2TCqhIjBBjqkAQfFQEzhnVSPY4GkWZBlvRW2%2FIsAoKTzWi9Ie5h7v7PfXP0gVnGXZ2WYWlD8TaDBtMagRb03zF%2BmN%2FlnKKkGyWi1eN7ffd3ntu4M1M3Yp4oubiee2o7XYdhCNxKF2z8g5lqJZNJSbuytgDjxkv6tZYPHsEj3%2FvERRC5VsU8rUspG%2BY8KIYNk9lcfDLafy7BZ2jUlpIb3vGMzR20kVmzDci%2BYu5dD&X-Amz-Signature=530ca505801ea5ad70911ca7d3e3f229f0c0e81a60ab8453e60d695b13470414&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k describe deploy -n delta webapp-mysql 
    Name:                   webapp-mysql
    Namespace:              delta
    CreationTimestamp:      Wed, 09 Apr 2025 03:45:58 +0000
    Labels:                 name=webapp-mysql
    Annotations:            deployment.kubernetes.io/revision: 1
    Selector:               name=webapp-mysql
    Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
    StrategyType:           RollingUpdate
    MinReadySeconds:        0
    RollingUpdateStrategy:  25% max unavailable, 25% max surge
    Pod Template:
      Labels:  name=webapp-mysql
      Containers:
       webapp-mysql:
        Image:      mmumshad/simple-webapp-mysql
        Port:       8080/TCP
        Host Port:  0/TCP
        Environment:
          DB_Host:      mysql-service
         
     DB_User:      sql-user
    
          DB_Password:  paswrd
        Mounts:         <none>
      Volumes:          <none>
      Node-Selectors:   <none>
      Tolerations:      <none>
    Conditions:
      Type           Status  Reason
      ----           ------  ------
      Available      True    MinimumReplicasAvailable
      Progressing    True    NewReplicaSetAvailable
    OldReplicaSets:  <none>
    NewReplicaSet:   webapp-mysql-7dd5888bd4 (1/1 replicas created)
    Events:
      Type    Reason             Age   From                   Message
      ----    ------             ----  ----                   -------
      Normal  ScalingReplicaSet  74s   deployment-controller  Scaled up replica set webapp-mysql-7dd5888bd4 from 0 to 1
    
    controlplane ~ ➜  k edit deploy -n delta webapp-mysql # DB_User 환경변수 값 수정.
    deployment.apps/webapp-mysql edited
    ```

5. epsilon 네임스페이스에 같은 2-tier 애플리케이션이 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/636892d0-f438-46e1-b54f-3b5802587e41/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637H5P2HY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGQ8rHFNC1eVbHpy9kV9SMPEojRXO1zqZYqUViChoEVTAiEAtQjlkL4o4vT9vvF7obExT%2B7LjKsANCT0S7N6SCZUgR0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FrmzM3PtY7pthvhCrcA8wa5S0b%2BgRSaEKlgfVTtYv60EO52lEfafGYlRaTM2lX%2BVhN4RkVRJepOnBehNENGalzkV%2B02771bt26RCchHtNBPEGCCu8IDyIuUFoaKBwwIFQVMNbV9lXTFxOZxxA9Y3U22R1MfbRpvAY8wuLXkogTcSuA2D%2F4GAX0%2B6t%2B9xOOf0%2FPxclk1jfNY45%2FzP6E5Hbaqx%2FYqwZba0afmaEJ%2FZpq5vR27p4NTb4AaXEBf8WYHWpc9Q4rEwE3kBLjf5bbWouj8PeC%2BUCgDto6g1KKddCf7DkeCXlRG1Y1c9hU3wTpR5%2FLFPfh%2Bvx7wK%2BU6cOepFTYC3%2FP7C6im3SIdmJCBuYZjRKsrdfzg%2FP7YKwGTw8PSFopbSLN4PEs2F9aRX9iMIE1aNm0V1Ny5TAJXxxy0HbVGAOpLtDvdW3oT3C4gdjrtt3S2lFphVBt3LAvA7vOPGnis7qNsF9YyRMEM3hHSq34WtlmDX%2B1rg7Teg1f5jVCjKux6anOyYlLr6H050hLWI66ebNzGV1o%2FeHnbs8a0DquoNh6pOth8sdG63ME801j8SYpHiSeHyLqSUP29JTyBwKv%2FoDtQ%2BRYjKpvVvxvfy%2FEN3Z3R8fzXmNTqnhR4kp4a%2BXf9xpRVZJSP81OMNODiMEGOqUBdXedhXWbz2BjnuNbIeQ8Bg5%2F%2B3NxsjaIALbQuf5myqdxVO6dYQh9NrBnDxSIH01SacfuGOhxwPLJHNzgL1xrgD3%2FpyMYdI%2BQojXnezvHautdM91pWu8vE1z35tg67t8j4oQRlLsCqkSTk6Obdn5WYAcijlIWUA%2Fgy2XS2nRYlU3xplHGfSvH3sUVayBf2Zz2izvfBAZ4YjR1c0VJn7giqdczOyby&X-Amz-Signature=63161a373078d86c11139ebad90f431c338691008628e64fae9fdf95b1743356&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k get all -n epsilon 
    NAME                                READY   STATUS    RESTARTS   AGE
    pod/mysql                           1/1     Running   0          2m6s
    pod/webapp-mysql-7dd5888bd4-qtzl7   1/1     Running   0          2m6s
    
    NAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
    service/mysql-service   ClusterIP   10.43.78.185   <none>        3306/TCP         2m6s
    service/web-service     NodePort    10.43.198.25   <none>        8080:30081/TCP   2m6s
    
    NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-mysql   1/1     1            1           2m6s
    
    NAME                                      DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-mysql-7dd5888bd4   1         1         1       2m6s
    
    controlplane ~ ➜  k describe deploy -n epsilon webapp-mysql 
    Name:                   webapp-mysql
    Namespace:              epsilon
    CreationTimestamp:      Wed, 09 Apr 2025 03:57:47 +0000
    Labels:                 name=webapp-mysql
    Annotations:            deployment.kubernetes.io/revision: 1
    Selector:               name=webapp-mysql
    Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
    StrategyType:           RollingUpdate
    MinReadySeconds:        0
    RollingUpdateStrategy:  25% max unavailable, 25% max surge
    Pod Template:
      Labels:  name=webapp-mysql
      Containers:
       webapp-mysql:
        Image:      mmumshad/simple-webapp-mysql
        Port:       8080/TCP
        Host Port:  0/TCP
        Environment:
          DB_Host:      mysql-service
          
    DB_User:      sql-user
    
          DB_Password:  paswrd
        Mounts:         <none>
      Volumes:          <none>
      Node-Selectors:   <none>
      Tolerations:      <none>
    Conditions:
      Type           Status  Reason
      ----           ------  ------
      Available      True    MinimumReplicasAvailable
      Progressing    True    NewReplicaSetAvailable
    OldReplicaSets:  <none>
    NewReplicaSet:   webapp-mysql-7dd5888bd4 (1/1 replicas created)
    Events:
      Type    Reason             Age    From                   Message
      ----    ------             ----   ----                   -------
      Normal  ScalingReplicaSet  2m22s  deployment-controller  Scaled up replica set webapp-mysql-7dd5888bd4 from 0 to 1
    
    controlplane ~ ➜  k describe po -n epsilon mysql 
    Name:             mysql
    Namespace:        epsilon
    Priority:         0
    Service Account:  default
    Node:             controlplane/192.168.0.190
    Start Time:       Wed, 09 Apr 2025 03:57:47 +0000
    Labels:           name=mysql
    Annotations:      <none>
    Status:           Running
    IP:               10.22.0.18
    IPs:
      IP:  10.22.0.18
    Containers:
      mysql:
        Container ID:   containerd://e8cf0fb4f72b739068fea8ac395195e0f59d3c93767d4a43b1c0c2aa7e88d0e1
        Image:          mysql:5.6
        Image ID:       docker.io/library/mysql@sha256:20575ecebe6216036d25dab5903808211f1e9ba63dc7825ac20cb975e34cfcae
        Port:           3306/TCP
        Host Port:      0/TCP
        State:          Running
          Started:      Wed, 09 Apr 2025 03:57:48 +0000
        Ready:          True
        Restart Count:  0
        Environment:
          
    MYSQL_ROOT_PASSWORD:  passwooooorrddd
    
        Mounts:
          /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-4cclv (ro)
    Conditions:
      Type                        Status
      PodReadyToStartContainers   True 
      Initialized                 True 
      Ready                       True 
      ContainersReady             True 
      PodScheduled                True 
    Volumes:
      kube-api-access-4cclv:
        Type:                    Projected (a volume that contains injected data from multiple sources)
        TokenExpirationSeconds:  3607
        ConfigMapName:           kube-root-ca.crt
        ConfigMapOptional:       <nil>
        DownwardAPI:             true
    QoS Class:                   BestEffort
    Node-Selectors:              <none>
    Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
    Events:
      Type    Reason     Age    From               Message
      ----    ------     ----   ----               -------
      Normal  Scheduled  2m53s  default-scheduler  Successfully assigned epsilon/mysql to controlplane
      Normal  Pulled     2m53s  kubelet            Container image "mysql:5.6" already present on machine
      Normal  Created    2m53s  kubelet            Created container: mysql
      Normal  Started    2m52s  kubelet            Started container mysql
    controlplane ~ ➜ k get po -n epsilon mysql -o yaml > mysql.yaml
    
    controlplane ~ ➜  k edit deploy -n epsilon webapp-mysql # DB_User 환경변수 값 수정.
    deployment.apps/webapp-mysql edited
    
    controlplane ~ ➜  vi mysql.yaml # MYSQL_ROOT_PASSWORD 환경변수 값 수정.
    
    controlplane ~ ➜  k delete po -n epsilon mysql 
    pod "mysql" deleted
    
    controlplane ~ ➜  k apply -f mysql.yaml 
    pod/mysql created
    ```

6. zeta 네임스페이스에 같은 2-tier 애플리케이션이 배포됨. 그린 웹 페이지를 표시해야 함. app 탭을 클릭하여 애플리케이션을 볼 수 있음. 현재 실패. 문제를 해결 및 수정.
주어진 아키텍처에 고치기. 아래 아키텍처 다이어그램에서 주어진 이름과 포트 번호를 사용. 필요에 따라 개체를 편집하거나 삭제 또는 재생성.

    ![36e1a636-902a-47cc-9047-01d0b4cc6105.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d9828d96-9f33-418b-8bb9-9839686316a5/36e1a636-902a-47cc-9047-01d0b4cc6105.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLCWANB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCM77kI2zC5adK%2FqV97jm3BCdDx0j5kRkqSsukj5nEBsAIhAIfF0YfnwbLIyYSbApQGo9FURPqbBHf0XU4fldNFbtcQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGvq529KAKEBBmi0q3AN%2FscwvefBX1wU02yPvll5bfeK8VVEAvxEF63Dqu1GwK1Sv7oMmRocdcZ%2F0gL0waJsmmfe3DHsk3H4MJz0g1W2Vjc5V46Uo803OUsNdPz2EB6%2BV97lXQVxzXant%2Fmndd2aOuIAXHMfqBQOsiFkZSoyF9hl8s6xk3SfEgR0j9hCWCrvG4d4cEOHZsevD36wkfk3Ralje3INyQvJASftVB55YJmXuSnj9KhxjazpzKuZWiZhQjbneoB%2Fe4enPM5ZyUqZ0aZUAthgulZ5184phH0qYKsyiYUu6G7UwUVOcOfcma05fNTLREIksu94QT1aSUq8YkVfPVlZNDgtOVihPW7j78eWfazwgPU4DQfgvryAvmeENcIl7GqVndaPhXNk6ds9RiLnCRL4MoMe%2BI%2B7l90vmQjwhKOzD286qsSqkmoUFIeu9pQhytxFw8XIMKEWc5ifYP5X345oB%2F%2F9%2FZiApMapbjn%2FoXOvcbyG%2F84p0N3dMHykKUT5853HFR1Ndeici6MQB1CqjuMVCQN1HUapnxNq6G161kVb9CKyVgsmQcuQ4LykX%2FU15WZdwzLMZ5mWWcem43EdotZFm3PEcKQANsSQCZCvU%2FXb%2BQ8coEQifjlA1jPaJH9r6MTWa9Wcc%2FzDK7IfBBjqkAV5rKXHEx1z5MHxd4uxnyiIWoNv5tL2wkt2hqVAD%2BxR2aH2tjPW%2FrkAWLdTGd2%2FkMYVTzM5MzC3COEWH4gZTahhDf7nxfDaFtFIhtLU5ETs17%2FLkDQbG74j%2BK7Spo3LsAlULbhhqKIY6IQA59KQH0CIgDcwXZvv8Lav1hRoP57FFiJk9xSbHo9XDY162XFQC86Pw3eWE5LAG%2FMju9xK4In9k8rFC&X-Amz-Signature=2706f4e95166e1ac73f53be2a6006bfefe36adb181ae92e2bd05c27646ed15b7&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k get all -n zeta 
    NAME                                READY   STATUS    RESTARTS   AGE
    pod/mysql                           1/1     Running   0          116s
    pod/webapp-mysql-7dd5888bd4-4fc56   1/1     Running   0          116s
    
    NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    service/mysql-service   ClusterIP   10.43.110.154   <none>        3306/TCP         116s
    service/web-service     NodePort    10.43.163.116   <none>        8080:30088/TCP   116s
    
    NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/webapp-mysql   1/1     1            1           116s
    
    NAME                                      DESIRED   CURRENT   READY   AGE
    replicaset.apps/webapp-mysql-7dd5888bd4   1         1         1       116s
    
    controlplane ~ ➜  k describe svc -n zeta web-service 
    Name:                     web-service
    Namespace:                zeta
    Labels:                   <none>
    Annotations:              <none>
    Selector:                 name=webapp-mysql
    Type:                     NodePort
    IP Family Policy:         SingleStack
    IP Families:              IPv4
    IP:                       10.43.163.116
    IPs:                      10.43.163.116
    Port:                     <unset>  8080/TCP
    TargetPort:               8080/TCP
    
    NodePort:                 <unset>  30088/TCP
    
    Endpoints:                10.22.0.23:8080
    Session Affinity:         None
    External Traffic Policy:  Cluster
    Internal Traffic Policy:  Cluster
    Events:                   <none>
    
    controlplane ~ ➜  k edit svc -n zeta web-service # NodePort번호 수정.
    service/web-service edited
    ```


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/ed76229c-cea3-4635-a7f0-f6ffa62d9fc2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLCWANB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCM77kI2zC5adK%2FqV97jm3BCdDx0j5kRkqSsukj5nEBsAIhAIfF0YfnwbLIyYSbApQGo9FURPqbBHf0XU4fldNFbtcQKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGvq529KAKEBBmi0q3AN%2FscwvefBX1wU02yPvll5bfeK8VVEAvxEF63Dqu1GwK1Sv7oMmRocdcZ%2F0gL0waJsmmfe3DHsk3H4MJz0g1W2Vjc5V46Uo803OUsNdPz2EB6%2BV97lXQVxzXant%2Fmndd2aOuIAXHMfqBQOsiFkZSoyF9hl8s6xk3SfEgR0j9hCWCrvG4d4cEOHZsevD36wkfk3Ralje3INyQvJASftVB55YJmXuSnj9KhxjazpzKuZWiZhQjbneoB%2Fe4enPM5ZyUqZ0aZUAthgulZ5184phH0qYKsyiYUu6G7UwUVOcOfcma05fNTLREIksu94QT1aSUq8YkVfPVlZNDgtOVihPW7j78eWfazwgPU4DQfgvryAvmeENcIl7GqVndaPhXNk6ds9RiLnCRL4MoMe%2BI%2B7l90vmQjwhKOzD286qsSqkmoUFIeu9pQhytxFw8XIMKEWc5ifYP5X345oB%2F%2F9%2FZiApMapbjn%2FoXOvcbyG%2F84p0N3dMHykKUT5853HFR1Ndeici6MQB1CqjuMVCQN1HUapnxNq6G161kVb9CKyVgsmQcuQ4LykX%2FU15WZdwzLMZ5mWWcem43EdotZFm3PEcKQANsSQCZCvU%2FXb%2BQ8coEQifjlA1jPaJH9r6MTWa9Wcc%2FzDK7IfBBjqkAV5rKXHEx1z5MHxd4uxnyiIWoNv5tL2wkt2hqVAD%2BxR2aH2tjPW%2FrkAWLdTGd2%2FkMYVTzM5MzC3COEWH4gZTahhDf7nxfDaFtFIhtLU5ETs17%2FLkDQbG74j%2BK7Spo3LsAlULbhhqKIY6IQA59KQH0CIgDcwXZvv8Lav1hRoP57FFiJk9xSbHo9XDY162XFQC86Pw3eWE5LAG%2FMju9xK4In9k8rFC&X-Amz-Signature=f073269f89dfa5344e682cab33863c598415d3899dc5719f4b6bdfb170b49cf9&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    controlplane ~ ➜  k describe deploy -n zeta webapp-mysql 
    Name:                   webapp-mysql
    Namespace:              zeta
    CreationTimestamp:      Wed, 09 Apr 2025 04:09:24 +0000
    Labels:                 name=webapp-mysql
    Annotations:            deployment.kubernetes.io/revision: 1
    Selector:               name=webapp-mysql
    Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
    StrategyType:           RollingUpdate
    MinReadySeconds:        0
    RollingUpdateStrategy:  25% max unavailable, 25% max surge
    Pod Template:
      Labels:  name=webapp-mysql
      Containers:
       webapp-mysql:
        Image:      mmumshad/simple-webapp-mysql
        Port:       8080/TCP
        Host Port:  0/TCP
        Environment:
          DB_Host:      mysql-service
          DB_User:      sql-user
          DB_Password:  paswrd
        Mounts:         <none>
      Volumes:          <none>
      Node-Selectors:   <none>
      Tolerations:      <none>
    Conditions:
      Type           Status  Reason
      ----           ------  ------
      Available      True    MinimumReplicasAvailable
      Progressing    True    NewReplicaSetAvailable
    OldReplicaSets:  <none>
    NewReplicaSet:   webapp-mysql-7dd5888bd4 (1/1 replicas created)
    Events:
      Type    Reason             Age    From                   Message
      ----    ------             ----   ----                   -------
      Normal  ScalingReplicaSet  4m17s  deployment-controller  Scaled up replica set webapp-mysql-7dd5888bd4 from 0 to 1
    
    controlplane ~ ➜  k edit deploy -n zeta webapp-mysql # DB_User 환경변수 수정. 
    deployment.apps/webapp-mysql edited
    
    controlplane ~ ➜  k describe svc -n zeta mysql-service 
    Name:                     mysql-service
    Namespace:                zeta
    Labels:                   <none>
    Annotations:              <none>
    Selector:                 name=mysql
    Type:                     ClusterIP
    IP Family Policy:         SingleStack
    IP Families:              IPv4
    IP:                       10.43.110.154
    IPs:                      10.43.110.154
    Port:                     <unset>  3306/TCP
    TargetPort:               3306/TCP
    Endpoints:                10.22.0.22:3306
    Session Affinity:         None
    Internal Traffic Policy:  Cluster
    Events:                   <none>
    
    controlplane ~ ➜  k describe po -n zeta mysql 
    Name:             mysql
    Namespace:        zeta
    Priority:         0
    Service Account:  default
    Node:             controlplane/192.168.0.190
    Start Time:       Wed, 09 Apr 2025 04:09:24 +0000
    Labels:           name=mysql
    Annotations:      <none>
    Status:           Running
    IP:               10.22.0.22
    IPs:
      IP:  10.22.0.22
    Containers:
      mysql:
        Container ID:   containerd://28fbc8ee55aad069ba3d4cfdd17c9a328b4ae916f3d3c5a4c17e3b6dba4e5d30
        Image:          mysql:5.6
        Image ID:       docker.io/library/mysql@sha256:20575ecebe6216036d25dab5903808211f1e9ba63dc7825ac20cb975e34cfcae
        Port:           3306/TCP
        Host Port:      0/TCP
        State:          Running
          Started:      Wed, 09 Apr 2025 04:09:25 +0000
        Ready:          True
        Restart Count:  0
        Environment:
          
    MYSQL_ROOT_PASSWORD:  passwooooorrddd
    
        Mounts:
          /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-tcq84 (ro)
    Conditions:
      Type                        Status
      PodReadyToStartContainers   True 
      Initialized                 True 
      Ready                       True 
      ContainersReady             True 
      PodScheduled                True 
    Volumes:
      kube-api-access-tcq84:
        Type:                    Projected (a volume that contains injected data from multiple sources)
        TokenExpirationSeconds:  3607
        ConfigMapName:           kube-root-ca.crt
        ConfigMapOptional:       <nil>
        DownwardAPI:             true
    QoS Class:                   BestEffort
    Node-Selectors:              <none>
    Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
    Events:
      Type    Reason     Age   From               Message
      ----    ------     ----  ----               -------
      Normal  Scheduled  8m7s  default-scheduler  Successfully assigned zeta/mysql to controlplane
      Normal  Pulled     8m7s  kubelet            Container image "mysql:5.6" already present on machine
      Normal  Created    8m7s  kubelet            Created container: mysql
      Normal  Started    8m7s  kubelet            Started container mysql
      
    controlplane ~ ➜  k get po -n zeta mysql -o yaml > mysql-zeta.yaml
    
    controlplane ~ ➜  vi mysql-zeta.yaml # MYSQL_ROOT_PASSWORD 환경변수 수정.
    
    controlplane ~ ➜  k delete po -n zeta mysql --force
    Warning: Immediate deletion does not wait for confirmation that the running resource has been terminated. The resource may continue to run on the cluster indefinitely.
    pod "mysql" force deleted
    
    controlplane ~ ➜  k apply -f mysql-zeta.yaml 
    pod/mysql created
    ```


## Control Plane Failure


클러스터에 노드가 상태를 살핌으로써 시작.


클러스터 위 실행 중인  pod의 상태 확인.


kubeadm tool을 사용하여 클러스터를 배포할 경우 controlplane 구성 요소가 pod로 배포되었다면 kube-system 네임스페이스의 pod가 실행 중인지 확인 가능.


이 경우 서비스와 같이 서비스로 배포되었다면 마스터 노드의 kube apiserver, controll manager, scheduler, worker 노드의 kubelet과 kube proxy 서비스와 같은 서비스 상태를 확인.


다음으로 controlplane 구성 요소의 로그 확인. kubeadm의 경우 controlplane 구성요소를 호스팅하는 pod의 로그를 보는 데  `kubectl logs` 명령어 사용. 마스터 노드에 기본적으로 구성된 서비스의 경우, 호스트 로깅 솔루션을 사용하여 서비스 로그를 확인.


[https://kubernetes.io/docs/tasks/debug-application-cluster/debug-cluster/](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-cluster/)


## Practice Test - Control Plane Failure

1. 클러스터가 망가짐. 애플리케이션이 배포되지 않음. 문제 해결하기.

    ```bash
    controlplane ~ ➜  k get no
    NAME           STATUS   ROLES           AGE   VERSION
    controlplane   Ready    control-plane   12m   v1.32.0
    
    controlplane ~ ➜  k get po
    NAME                   READY   STATUS    RESTARTS   AGE
    app-7f9667c9d9-cqtzk   0/1     Pending   0          47s
    
    controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS             RESTARTS     AGE
    coredns-7484cd47db-6xv8z               1/1     Running            0            12m
    coredns-7484cd47db-xmf2s               1/1     Running            0            12m
    etcd-controlplane                      1/1     Running            0            12m
    kube-apiserver-controlplane            1/1     Running            0            12m
    kube-controller-manager-controlplane   1/1     Running            0            12m
    kube-proxy-dddt8                       1/1     Running            0            12m
    kube-scheduler-controlplane            0/1     CrashLoopBackOff   3 (6s ago)   61s
    
    controlplane ~ ➜  k logs -n kube-system kube-scheduler-controlplane 
    
    controlplane ~ ➜  k describe -n kube-system po kube-scheduler-controlplane 
    Name:                 kube-scheduler-controlplane
    Namespace:            kube-system
    Priority:             2000001000
    Priority Class Name:  system-node-critical
    Node:                 controlplane/192.168.100.171
    Start Time:           Thu, 10 Apr 2025 01:49:01 +0000
    Labels:               component=kube-scheduler
                          tier=control-plane
    Annotations:          kubernetes.io/config.hash: e62b9c3ab48bb2ebb392179898b5495e
                          kubernetes.io/config.mirror: e62b9c3ab48bb2ebb392179898b5495e
                          kubernetes.io/config.seen: 2025-04-10T02:00:13.632750216Z
                          kubernetes.io/config.source: file
    Status:               Running
    SeccompProfile:       RuntimeDefault
    IP:                   192.168.100.171
    IPs:
      IP:           192.168.100.171
    Controlled By:  Node/controlplane
    Containers:
      kube-scheduler:
        Container ID:  containerd://9c127a2fd4a2d7da6d3483c512dc934a942b5f078e59b4d4024d7f332388c473
        Image:         registry.k8s.io/kube-scheduler:v1.32.0
        Image ID:      registry.k8s.io/kube-scheduler@sha256:84c998f7610b356a5eed24f801c01b273cf3e83f081f25c9b16aa8136c2cafb1
        Port:          <none>
        Host Port:     <none>
        Command:
          kube-schedulerrrr
          --authentication-kubeconfig=/etc/kubernetes/scheduler.conf
          --authorization-kubeconfig=/etc/kubernetes/scheduler.conf
          --bind-address=127.0.0.1
          --kubeconfig=/etc/kubernetes/scheduler.conf
          --leader-elect=true
        State:          Waiting
          Reason:       CrashLoopBackOff
        Last State:     Terminated
          Reason:       StartError
          Message:      failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "kube-schedulerrrr": executable file not found in $PATH: unknown
          Exit Code:    128
          Started:      Thu, 01 Jan 1970 00:00:00 +0000
          Finished:     Thu, 10 Apr 2025 02:01:21 +0000
        Ready:          False
        Restart Count:  3
        Requests:
          cpu:        100m
        Liveness:     http-get https://127.0.0.1:10259/livez delay=10s timeout=15s period=10s #success=1 #failure=8
        Readiness:    http-get https://127.0.0.1:10259/readyz delay=0s timeout=15s period=1s #success=1 #failure=3
        Startup:      http-get https://127.0.0.1:10259/livez delay=10s timeout=15s period=10s #success=1 #failure=24
        Environment:  <none>
        Mounts:
          /etc/kubernetes/scheduler.conf from kubeconfig (ro)
    Conditions:
      Type                        Status
      PodReadyToStartContainers   True 
      Initialized                 True 
      Ready                       False 
      ContainersReady             False 
      PodScheduled                True 
    Volumes:
      kubeconfig:
        Type:          HostPath (bare host directory volume)
        Path:          /etc/kubernetes/scheduler.conf
        HostPathType:  FileOrCreate
    QoS Class:         Burstable
    Node-Selectors:    <none>
    Tolerations:       :NoExecute op=Exists
    Events:
      Type     Reason   Age                From     Message
      ----     ------   ----               ----     -------
      Normal   Pulled   41s (x4 over 96s)  kubelet  Container image "registry.k8s.io/kube-scheduler:v1.32.0" already present on machine
      Normal   Created  41s (x4 over 95s)  kubelet  Created container: kube-scheduler
      
    Warning  Failed   41s (x4 over 95s)  kubelet  Error: failed to create containerd task: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "kube-schedulerrrr": executable file not found in $PATH: unknown
    
      Warning  BackOff  9s (x14 over 94s)  kubelet  Back-off restarting failed container kube-scheduler in pod kube-scheduler-controlplane_kube-system(e62b9c3ab48bb2ebb392179898b5495e)
    
    controlplane ~ ➜  ls /etc/kubernetes/manifests/
    etcd.yaml  kube-apiserver.yaml  kube-controller-manager.yaml  kube-scheduler.yaml
    
    controlplane ~ ➜  vi /etc/kubernetes/manifests/kube-scheduler.yaml # command 부분 수정.
    
    controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS    RESTARTS   AGE
    coredns-7484cd47db-6xv8z               1/1     Running   0          15m
    coredns-7484cd47db-xmf2s               1/1     Running   0          15m
    etcd-controlplane                      1/1     Running   0          15m
    kube-apiserver-controlplane            1/1     Running   0          15m
    kube-controller-manager-controlplane   1/1     Running   0          15m
    kube-proxy-dddt8                       1/1     Running   0          15m
    kube-scheduler-controlplane            0/1     Running   0          2s
    ```

2. app deployment를 pod 2개로 확장.

    ```bash
    controlplane ~ ➜  k edit deploy app 
    deployment.apps/app edited
    
    controlplane ~ ➜  k get deploy
    NAME   READY   UP-TO-DATE   AVAILABLE   AGE
    app    1/2     1            1           8m24s
    ```


    replicas를 2로 설정하였지만 pod가 2개 생성되지는 않음.

3. deployment를 2로 확장했지만 pod 수가 증가한 것처럼 보이지 않음. 조사하고 문제 해결. deployment와 replicaset을 관리하는 구성 요소 관찰.

    ```bash
    controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS             RESTARTS       AGE
    coredns-7484cd47db-6xv8z               1/1     Running            0              27m
    coredns-7484cd47db-xmf2s               1/1     Running            0              27m
    etcd-controlplane                      1/1     Running            0              27m
    kube-apiserver-controlplane            1/1     Running            0              27m
    kube-controller-manager-controlplane   0/1     CrashLoopBackOff   6 (4m5s ago)   9m58s
    kube-proxy-dddt8                       1/1     Running            0              27m
    kube-scheduler-controlplane            1/1     Running            0              11m
    
    controlplane ~ ➜  k logs -n kube-system kube-controller-manager-controlplane 
    I0410 02:12:07.432277       1 serving.go:386] Generated self-signed cert in-memory
    E0410 02:12:07.432378       1 run.go:72] "command failed" err="stat /etc/kubernetes/controller-manager-XXXX.conf: no such file or directory"
    
    controlplane ~ ➜  ls /etc/kubernetes/
    admin.conf               kubelet.conf  pki             super-admin.conf
    controller-manager.conf  manifests     scheduler.conf
    
    controlplane ~ ➜  vi /etc/kubernetes/manifests/kube-controller-manager.yaml # kubeconfig 플래그 수정.
    
    controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS    RESTARTS   AGE
    coredns-7484cd47db-6xv8z               1/1     Running   0          29m
    coredns-7484cd47db-xmf2s               1/1     Running   0          29m
    etcd-controlplane                      1/1     Running   0          29m
    kube-apiserver-controlplane            1/1     Running   0          29m
    kube-controller-manager-controlplane   1/1     Running   0          29s
    kube-proxy-dddt8                       1/1     Running   0          29m
    kube-scheduler-controlplane            1/1     Running   0          13m
    
    controlplane ~ ➜  k get po
    NAME                   READY   STATUS    RESTARTS   AGE
    app-7f9667c9d9-54x7x   1/1     Running   0          13s
    app-7f9667c9d9-cqtzk   1/1     Running   0          18m
    ```

4. 스케일링에 다시 문제 발생. deployment를 replicas 3으로 확장하려고 했지만 안 됨.

    ```bash
    controlplane ~ ➜  k get -n kube-system po
    NAME                                   READY   STATUS             RESTARTS     AGE
    coredns-7484cd47db-6xv8z               1/1     Running            0            32m
    coredns-7484cd47db-xmf2s               1/1     Running            0            32m
    etcd-controlplane                      1/1     Running            0            32m
    kube-apiserver-controlplane            1/1     Running            0            32m
    kube-controller-manager-controlplane   0/1     CrashLoopBackOff   4 (2s ago)   101s
    kube-proxy-dddt8                       1/1     Running            0            32m
    kube-scheduler-controlplane            1/1     Running            0            17m
    
    controlplane ~ ➜  k logs -n kube-system kube-controller-manager-controlplane 
    I0410 02:21:56.220641       1 serving.go:386] Generated self-signed cert in-memory
    
    E0410 02:21:56.727556       1 run.go:72] "command failed" err="unable to load client CA provider: open /etc/kubernetes/pki/ca.crt: no such file or directory"
    
    
    controlplane ~ ➜  ls /etc/kubernetes/pki/
    apiserver.crt                 apiserver-kubelet-client.key  front-proxy-ca.key
    apiserver-etcd-client.crt     ca.crt                        front-proxy-client.crt
    apiserver-etcd-client.key     ca.key                        front-proxy-client.key
    apiserver.key                 etcd                          sa.key
    apiserver-kubelet-client.crt  front-proxy-ca.crt            sa.pub
    # host에는 ca.crt 파일이 있음. 이걸 마운트해서 사용.
    
    controlplane ~ ➜  vi /etc/kubernetes/manifests/kube-controller-manager.yaml
    # volumeMount는 문제가 없음. hostpath 오류. volume의 hostpath 수정.
    
    controlplane ~ ➜  k get -n kube-system po
    NAME                                   READY   STATUS    RESTARTS   AGE
    coredns-7484cd47db-6xv8z               1/1     Running   0          39m
    coredns-7484cd47db-xmf2s               1/1     Running   0          39m
    etcd-controlplane                      1/1     Running   0          39m
    kube-apiserver-controlplane            1/1     Running   0          39m
    kube-controller-manager-controlplane   1/1     Running   0          40s
    kube-proxy-dddt8                       1/1     Running   0          39m
    kube-scheduler-controlplane            1/1     Running   0          23m
    
    controlplane ~ ➜  k get po
    NAME                   READY   STATUS    RESTARTS   AGE
    app-7f9667c9d9-54x7x   1/1     Running   0          10m
    app-7f9667c9d9-cqtzk   1/1     Running   0          27m
    app-7f9667c9d9-z4xrz   1/1     Running   0          26s
    ```


## Worker Node Failure


클러스터에 노드 상태 확인. not ready 상태라면 `kubectl describe` 명령어로 node 상세 정보 확인. 각 노드에는 노드가 실패한 이유를 파악할 수 있는 일련의 조건이 있음.


상태에 따라 true, false, unknown으로 설정됨. 노드에 디스크 공간이 없으면 out of disc 플래그가 true로 설정됨. 메모리가 없으면 memory pressure가 true, 디스크 용량이 부족하면 disc pressure가 true. 너무 많은 프로세스가 있으면 PID pressure가 true. 마지막으로 전체적으로 healthy이면 ready 플래그가 true.


worker 노드가 master 노드와 통신이 멈췄을 때 이러한 상태들이 unknown으로 설정됨. lastheartbeattime 필드를 확인하여 노드가 충돌했을 가능성이 있는 시간을 확인. 이런 경우 노드 자체의 상태 확인. 노드가 온라인 상태이거나 충돌한 경우.충돌한 경우 백업 가져오기. 노드에서 가능한 CPU 메모리와 디스크 공간을 확인.


```bash
top

df -h
```


kubelet 상태 확인.


문제에 대한 kubelet log 확인.


kubelet 인증서 확인. 만료되지 않았는지, 올바른 그룹의 일원인지, 그리고 인증서가 올바른 CA에 의해 발급되었는지 확인.


## Practice Test - Worker Node Failure

1. 클러스터 고치기.

    ```bash
    controlplane ~ ➜  k get no
    NAME           STATUS     ROLES           AGE     VERSION
    controlplane   Ready      control-plane   6m29s   v1.32.0
    node01         NotReady   <none>          5m56s   v1.32.0
    
    controlplane ~ ➜  k describe no node01 
    Name:               node01
    Roles:              <none>
    Labels:             beta.kubernetes.io/arch=amd64
                        beta.kubernetes.io/os=linux
                        kubernetes.io/arch=amd64
                        kubernetes.io/hostname=node01
                        kubernetes.io/os=linux
    Annotations:        flannel.alpha.coreos.com/backend-data: {"VNI":1,"VtepMAC":"52:c3:57:d4:e0:f1"}
                        flannel.alpha.coreos.com/backend-type: vxlan
                        flannel.alpha.coreos.com/kube-subnet-manager: true
                        flannel.alpha.coreos.com/public-ip: 192.168.193.168
                        kubeadm.alpha.kubernetes.io/cri-socket: unix:///var/run/containerd/containerd.sock
                        node.alpha.kubernetes.io/ttl: 0
                        volumes.kubernetes.io/controller-managed-attach-detach: true
    CreationTimestamp:  Thu, 10 Apr 2025 02:40:35 +0000
    Taints:             node.kubernetes.io/unreachable:NoExecute
                        node.kubernetes.io/unreachable:NoSchedule
    Unschedulable:      false
    Lease:
      HolderIdentity:  node01
      AcquireTime:     <unset>
      RenewTime:       Thu, 10 Apr 2025 02:45:31 +0000
    Conditions:
      Type                 Status    LastHeartbeatTime                 LastTransitionTime                Reason              Message
      ----                 ------    -----------------                 ------------------                ------              -------
      NetworkUnavailable   False     Thu, 10 Apr 2025 02:40:40 +0000   Thu, 10 Apr 2025 02:40:40 +0000   FlannelIsUp         Flannel is running on this node
      MemoryPressure       Unknown   Thu, 10 Apr 2025 02:44:39 +0000   Thu, 10 Apr 2025 02:46:25 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      DiskPressure         Unknown   Thu, 10 Apr 2025 02:44:39 +0000   Thu, 10 Apr 2025 02:46:25 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      PIDPressure          Unknown   Thu, 10 Apr 2025 02:44:39 +0000   Thu, 10 Apr 2025 02:46:25 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      Ready                Unknown   Thu, 10 Apr 2025 02:44:39 +0000   Thu, 10 Apr 2025 02:46:25 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
    ```


    ```bash
    node01 ~ ➜  systemctl status containerd
    ● containerd.service - containerd container runtime
         Loaded: loaded (/lib/systemd/system/containerd.service; enabled; vendor preset: enabled)
         Active: active (running) since Thu 2025-04-10 02:39:23 UTC; 17min ago
           Docs: https://containerd.io
       Main PID: 947 (containerd)
          Tasks: 46
         Memory: 36.1M
         CGroup: /system.slice/containerd.service
                 ├─ 947 /usr/bin/containerd
                 ├─2745 /usr/bin/containerd-shim-runc-v2 -namespace k8s.io -id ad16ee49a6a48b7370fa4f0f93c616a34ba22a4bd16b7d41c1ca134b0a972dce -address /run/containerd/containerd.sock
                 └─2763 /usr/bin/containerd-shim-runc-v2 -namespace k8s.io -id 12a38ba7e3c8eaef26110a8676d7d35d2039ea40ce36ad9d7647dd99b9a36ee7 -address /run/containerd/containerd.sock
    
    node01 ~ ➜  systemctl status kubelet
    ○ kubelet.service - kubelet: The Kubernetes Node Agent
         Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
        Drop-In: /usr/lib/systemd/system/kubelet.service.d
                 └─10-kubeadm.conf
         Active: inactive (dead) since Thu 2025-04-10 02:45:38 UTC; 7min ago
           Docs: https://kubernetes.io/docs/
        Process: 2605 ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET>
       Main PID: 2605 (code=exited, status=0/SUCCESS)
       
    node01 ~ ➜  systemctl restart kubelet
    
    node01 ~ ➜  systemctl status kubelet
    ● kubelet.service - kubelet: The Kubernetes Node Agent
         Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
        Drop-In: /usr/lib/systemd/system/kubelet.service.d
                 └─10-kubeadm.conf
         Active: active (running) since Thu 2025-04-10 02:55:50 UTC; 20s ago
           Docs: https://kubernetes.io/docs/
       Main PID: 10423 (kubelet)
          Tasks: 23 (limit: 77143)
         Memory: 25.1M
         CGroup: /system.slice/kubelet.service
                 └─10423 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --conta>
    ```

2. 클러스터에 다시 문제 생김. 문제 조사하고 고치기.

    ```bash
    controlplane ~ ➜  k get no
    NAME           STATUS     ROLES           AGE   VERSION
    controlplane   Ready      control-plane   20m   v1.32.0
    node01         NotReady   <none>          20m   v1.32.0
    
    controlplane ~ ➜  k describe no node01 
    Name:               node01
    Roles:              <none>
    Labels:             beta.kubernetes.io/arch=amd64
                        beta.kubernetes.io/os=linux
                        kubernetes.io/arch=amd64
                        kubernetes.io/hostname=node01
                        kubernetes.io/os=linux
    Annotations:        flannel.alpha.coreos.com/backend-data: {"VNI":1,"VtepMAC":"52:c3:57:d4:e0:f1"}
                        flannel.alpha.coreos.com/backend-type: vxlan
                        flannel.alpha.coreos.com/kube-subnet-manager: true
                        flannel.alpha.coreos.com/public-ip: 192.168.193.168
                        kubeadm.alpha.kubernetes.io/cri-socket: unix:///var/run/containerd/containerd.sock
                        node.alpha.kubernetes.io/ttl: 0
                        volumes.kubernetes.io/controller-managed-attach-detach: true
    CreationTimestamp:  Thu, 10 Apr 2025 02:40:35 +0000
    Taints:             node.kubernetes.io/unreachable:NoExecute
                        node.kubernetes.io/unreachable:NoSchedule
    Unschedulable:      false
    Lease:
      HolderIdentity:  node01
      AcquireTime:     <unset>
      RenewTime:       Thu, 10 Apr 2025 02:57:42 +0000
    Conditions:
      Type                 Status    LastHeartbeatTime                 LastTransitionTime                Reason              Message
      ----                 ------    -----------------                 ------------------                ------              -------
      NetworkUnavailable   False     Thu, 10 Apr 2025 02:40:40 +0000   Thu, 10 Apr 2025 02:40:40 +0000   FlannelIsUp         Flannel is running on this node
      MemoryPressure       Unknown   Thu, 10 Apr 2025 02:55:50 +0000   Thu, 10 Apr 2025 02:58:35 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      DiskPressure         Unknown   Thu, 10 Apr 2025 02:55:50 +0000   Thu, 10 Apr 2025 02:58:35 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      PIDPressure          Unknown   Thu, 10 Apr 2025 02:55:50 +0000   Thu, 10 Apr 2025 02:58:35 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
      Ready                Unknown   Thu, 10 Apr 2025 02:55:50 +0000   Thu, 10 Apr 2025 02:58:35 +0000   NodeStatusUnknown   Kubelet stopped posting node status.
    Addresses:
      InternalIP:  192.168.193.168
      Hostname:    node01
    Capacity:
      cpu:                16
      ephemeral-storage:  772706776Ki
      hugepages-1Gi:      0
      hugepages-2Mi:      0
      memory:             65838276Ki
      pods:               110
    Allocatable:
      cpu:                16
      ephemeral-storage:  712126563583
      hugepages-1Gi:      0
      hugepages-2Mi:      0
      memory:             65735876Ki
      pods:               110
    System Info:
      Machine ID:                 132e3d2451f947fe9214456160254717
      System UUID:                4f584368-3e3d-3ef3-87e6-241933a2478b
      Boot ID:                    b2f91f92-8f5d-4045-afa2-6f1609cbd289
      Kernel Version:             5.15.0-1077-gcp
      OS Image:                   Ubuntu 22.04.4 LTS
      Operating System:           linux
      Architecture:               amd64
      Container Runtime Version:  containerd://1.6.26
      Kubelet Version:            v1.32.0
      Kube-Proxy Version:         v1.32.0
    PodCIDR:                      172.17.1.0/24
    PodCIDRs:                     172.17.1.0/24
    Non-terminated Pods:          (2 in total)
      Namespace                   Name                     CPU Requests  CPU Limits  Memory Requests  Memory Limits  Age
      ---------                   ----                     ------------  ----------  ---------------  -------------  ---
      kube-flannel                kube-flannel-ds-pnqsj    100m (0%)     0 (0%)      50Mi (0%)        0 (0%)         20m
      kube-system                 kube-proxy-cmvtk         0 (0%)        0 (0%)      0 (0%)           0 (0%)         20m
    Allocated resources:
      (Total limits may be over 100 percent, i.e., overcommitted.)
      Resource           Requests   Limits
      --------           --------   ------
      cpu                100m (0%)  0 (0%)
      memory             50Mi (0%)  0 (0%)
      ephemeral-storage  0 (0%)     0 (0%)
      hugepages-1Gi      0 (0%)     0 (0%)
      hugepages-2Mi      0 (0%)     0 (0%)
    Events:
      Type     Reason                   Age                    From             Message
      ----     ------                   ----                   ----             -------
      Normal   Starting                 20m                    kube-proxy       
      Normal   NodeAllocatableEnforced  20m                    kubelet          Updated Node Allocatable limit across pods
      Warning  InvalidDiskCapacity      20m                    kubelet          invalid capacity 0 on image filesystem
      Warning  CgroupV1                 20m                    kubelet          cgroup v1 support is in maintenance mode, please migrate to cgroup v2
    ```


    ```bash
    node01 ~ ➜  systemctl status containerd
    ● containerd.service - containerd container runtime
         Loaded: loaded (/lib/systemd/system/containerd.service; enabled; vendor preset: enabled)
         Active: active (running) since Thu 2025-04-10 02:39:23 UTC; 23min ago
           Docs: https://containerd.io
       Main PID: 947 (containerd)
          Tasks: 46
         Memory: 35.1M
         CGroup: /system.slice/containerd.service
                 ├─ 947 /usr/bin/containerd
                 ├─2745 /usr/bin/containerd-shim-runc-v2 -namespace k8s.io -id ad16ee49a6a48b7370fa4f0f>
                 └─2763 /usr/bin/containerd-shim-runc-v2 -namespace k8s.io -id 12a38ba7e3c8eaef26110a86>
    
    node01 ~ ➜  systemctl status kubelet
    ● kubelet.service - kubelet: The Kubernetes Node Agent
         Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
        Drop-In: /usr/lib/systemd/system/kubelet.service.d
                 └─10-kubeadm.conf
         Active: activating (auto-restart) (Result: exit-code) since Thu 2025-04-10 03:02:59 UTC; 8s ago
           Docs: https://kubernetes.io/docs/
        Process: 14034 ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELE>
       Main PID: 14034 (code=exited, status=1/FAILURE)
       
    node01 ~ ✖ sudo journalctl -u kubelet -f
    Apr 10 03:04:21 node01 kubelet[14756]: I0410 03:04:21.236944   14756 server.go:215] "--pod-infra-container-image will not be pruned by the image garbage collector in kubelet and should also be set in the remote runtime"
    Apr 10 03:04:21 node01 kubelet[14756]: E0410 03:04:21.238395   14756 run.go:72] "command failed" err="failed to construct kubelet dependencies: unable to load client CA file /etc/kubernetes/pki/WRONG-CA-FILE.crt: open /etc/kubernetes/pki/WRONG-CA-FILE.crt: no such file or directory"
    
    node01 ~ ➜  ls /var/lib/kubelet/
    checkpoints  cpu_manager_state  kubeadm-flags.env     pki      plugins_registry  pods
    config.yaml  device-plugins     memory_manager_state  plugins  pod-resources
    
    node01 ~ ➜  vi /var/lib/kubelet/config.yaml # x509.clientCAFile 부분 수정.
    
    node01 ~ ➜  systemctl status kubelet
    ● kubelet.service - kubelet: The Kubernetes Node Agent
         Loaded: loaded (/lib/systemd/system/kubelet.service; enabled; vendor preset: enabled)
        Drop-In: /usr/lib/systemd/system/kubelet.service.d
                 └─10-kubeadm.conf
         Active: active (running) since Thu 2025-04-10 03:07:35 UTC; 6min ago
           Docs: https://kubernetes.io/docs/
       Main PID: 16591 (kubelet)
          Tasks: 23 (limit: 77143)
         Memory: 29.9M
         CGroup: /system.slice/kubelet.service
                 └─16591 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf>
    ```

3. 클러스터에 다시 문제 생김. 문제 조사하고 고치기.

    kubelet은 정상 작동. 로그 확인.


    ```bash
    node01 ~ ➜  sudo journalctl -u kubelet -f
    Apr 10 03:19:34 node01 kubelet[19807]: E0410 03:19:34.348346   19807 kubelet_node_status.go:108] "Unable to register node with API server" err="Post \"https://controlplane:6553/api/v1/nodes\": dial tcp 192.168.227.136:6553: connect: connection refused" node="node01"
    
    node01 ~ ➜  ls /etc/kubernetes/
    kubelet.conf  manifests  pki
    
    node01 ~ ➜  vi /etc/kubernetes/kubelet.conf 
    
    node01 ~ ➜  systemctl restart kubelet
    ```


    ```bash
    controlplane ~ ➜  k get no
    NAME           STATUS   ROLES           AGE   VERSION
    controlplane   Ready    control-plane   44m   v1.32.0
    node01         Ready    <none>          43m   v1.32.0
    ```


## Network Troubleshooting


### **Network Plugin in Kubernetes**


아래와 같이 이용 가능한 몇몇 플러그인이 있음.


**1. Weave Net:**


`kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml`


네트워크 플러그인에 대한 자세한 내용 참조.


[https://kubernetes.io/docs/concepts/cluster-administration/addons/#networking-and-network-policy](https://kubernetes.io/docs/concepts/cluster-administration/addons/#networking-and-network-policy)


**2. Calico :**


curl로 설치하고


`curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml -O`


아래 명령어로 manifest 적용.


`kubectl apply -f calico.yaml`


Calico는 가장 진보된 CNI 네트워크 플러그인을 가지고 있음.


디렉토리에 다중 CNI 구성 파일이 있으면 kubelet은 사전 순 이름으로 처음으로 오는 구성 파일을 사용.


### **DNS in Kubernetes**


Kubernetes uses **CoreDNS**. **CoreDNS** is a flexible, extensible DNS server that can serve as the Kubernetes cluster DNS.


**Memory and Pods**


In large scale Kubernetes clusters, CoreDNS's memory usage is predominantly affected by the number of Pods and Services in the cluster. Other factors include the size of the filled DNS answer cache, and the rate of queries received (QPS) per CoreDNS instance.


Kubernetes resources for **coreDNS** are:

1. _a service account named_ _**coredns**__,_
2. _cluster-roles named_ _**coredns**_ _and_ _**kube-dns**_
3. _clusterrolebindings named_ _**coredns**_ _and_ _**kube-dns**__,_
4. _a deployment named_ _**coredns**__,_
5. _a configmap named_ _**coredns**_ _and a_
6. _service named_ _**kube-dns**__._

While analyzing the coreDNS deployment you can see that the the _**Corefile plugin**_ consists of important configuration which is defined as a _**configmap**_.


Port **53** is used for for _DNS resolution_.


```bash
kubernetes cluster.local in-addr.arpa ip6.arpa {
    pods insecure
    fallthrough in-addr.arpa ip6.arpa
    ttl 30
}
```


This is the backend to k8s for _cluster.local and reverse domains_.


`proxy . /etc/resolv.conf`


Forward out of cluster domains directly to right _authoritative DNS server_.


### Troubleshooting issues related to coreDNS


1. If you find **CoreDNS** pods in pending state first check network plugin is installed.


2. coredns pods have **CrashLoopBackOff or Error state**


If you have nodes that are running SELinux with an older version of Docker you might experience a scenario where the coredns pods are not starting. To solve that you can try one of the following options:


a)Upgrade to a newer version of Docker.


b)Disable **SELinux.**


c)Modify the coredns deployment to set **allowPrivilegeEscalation** to _true_:


```bash
kubectl -n kube-system get deployment coredns -o yaml | \
sed 's/allowPrivilegeEscalation: false/allowPrivilegeEscalation: true/g' | \
kubectl apply -f -
```


d)Another cause for **CoreDNS** to have CrashLoopBackOff is when a **CoreDNS** Pod deployed in Kubernetes detects a loop.


There are many ways to work around this issue, some are listed here:

- Add the following to your kubelet config yaml: _**resolvConf: <path-to-your-real-resolv-conf-file>**_ This flag tells _**kubelet**_ to pass an alternate _**resolv.conf**_ to Pods. For systems using **systemd-resolved**, _**/run/systemd/resolve/resolv.conf**_ is typically the location of the _**"real" resolv.conf**_, although this can be different depending on your distribution.
- Disable the local DNS cache on host nodes, and restore _**/etc/resolv.conf**_ to the original.
- A quick fix is to edit your **Corefile**, replacing forward _**. /etc/resolv.conf**_ with the IP address of your upstream DNS, for example forward **. 8.8.8.8**. But this only fixes the issue for **CoreDNS**, _**kubelet**_ will continue to forward the invalid _**resolv.conf**_ to all default dnsPolicy Pods, leaving them unable to resolve DNS.

3. If **CoreDNS** pods and the **kube-dns** service is working fine, check the **kube-dns** service has valid _**endpoints**_.


_kubectl -n kube-system get ep kube-dns_


If there are no endpoints for the service, inspect the service and make sure it uses the correct selectors and ports.


### **Kube-Proxy**


**kube-proxy** is a network proxy that runs on each node in the cluster. **kube-proxy** maintains _network rules on nodes_. These network rules allow network communication to the Pods from network sessions inside or outside of the cluster.


In a cluster configured with **kubeadm**, you can find **kube-proxy** as a _**daemonset**_.


**kubeproxy** is responsible for watching _services and endpoint associated with each service_. When the client is going to connect to the service using the _virtual IP_ the **kubeproxy** is responsible for _sending traffic to actual pods_.


If you run a `kubectl describe ds kube-proxy -n kube-system` you can see that the **kube-proxy** binary runs with following command inside the kube-proxy container.


```bash
Command:
  /usr/local/bin/kube-proxy
  --config=/var/lib/kube-proxy/config.conf
  --hostname-override=$(NODE_NAME)
```


So it fetches the configuration from a configuration file ie, _**/var/lib/kube-proxy/config.conf**_ and we can override the hostname with the node name of at which the pod is running.


In the config file we define the **clusterCIDR, kubeproxy mode, ipvs, iptables, bindaddress, kube-config** etc.


### Troubleshooting issues related to kube-proxy


1. Check **kube-proxy** pod in the **kube-system** namespace is running.


2. Check **kube-proxy** logs.


3. Check **configmap** is correctly defined and the config file for running **kube-proxy** binary is correct.


4. **kube-config** is defined in the **config map**.


5. check **kube-proxy** is _running_ inside the container


```bash
# netstat -plan | grep kube-proxy
tcp        0      0 0.0.0.0:30081           0.0.0.0:*               LISTEN      1/kube-proxy
tcp        0      0 127.0.0.1:10249         0.0.0.0:*               LISTEN      1/kube-proxy
tcp        0      0 172.17.0.12:33706       172.17.0.12:6443        ESTABLISHED 1/kube-proxy
tcp6       0      0 :::10256                :::*                    LISTEN      1/kube-proxy
```


_**References:**_


Debug Service issues:


[_`https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/`_](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/)


DNS Troubleshooting:


[_`https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/`_](https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/)


## Practice Test - Troubleshoot Network

1. triton 네임스페이스에 2-tier 애플리케이션 배포. green 웹 페이지가 성공적으로  보여야 함. 애플리케이션을 보려면 app 탭 클릭. 현재 실패. 문제 해결.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a50f6a04-6611-47f7-8b7e-374b7f9a07fb/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJK7WTQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYnceG431Po82dLn%2BZh417qU5ZDZ1LxeyYTXRnpA%2FhNAiEAsgRUFQIL%2BMX%2FQ%2BojlfFXfcRm%2ByqGQy7VUYBdjtA2mZQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPKa1a5Aowwg6qF4CrcA5niimwtsnmRz4rW6XLz0gbe8NJ858mGi41oBOTuF7UCVdCs2tbXEbcnk1GfxPPkb0WjxXrFAMo6NlkQzY9xyNg7R6ugP6bkY6RN%2FWyxPT7bMksaHpKbMBN5yLVKmTjf%2BjldeqHF9yW9BTEsTYVauCKgUrohDnN4dc%2BwDJPn4oFoqcPUldz4bneERWkg0o2xde4%2Bv5p0D27PbvoAD33O3DoBI%2FyeJ9RGCb4cnAXY3ob5kgK%2FKV%2B5WrdEAtwXZ4ocV3aK4TFdyXejRMosEmoKGqm7TvRBPrfFWJsejhOGOLGImu4z%2BEh5YkdWWcRSCCeOnd%2Fo5JjEmrajQ6OAmZeG%2BjcUwKCw0lg4VZfSB%2FIkrTwFGIXro8r1aFqhcy1VOFqbloaQVyCjEbSXcs2hrPQMYi3fu36ilsma9zczTNuH3VoD85hVb7YKoqKWgxkgxvxPwGNdorbhm5Skst8nMQqsuR44LbDvyq%2FM4bjZiBVGh8lMj%2Fkk9rSmledKjKfKD34d%2BkaIqGRTFJ3%2Bop4koRUex8wILrtJ1hlORbSNa3Giz3PyhExWCMP8P9Kf%2F6NVaEGjoKTlC8pSKbw%2F%2B2kDO%2FLpCWzMVx2mbw1lvZXPl%2FzMnbz8QGtTRvQ2ycVSLGAlMMrsh8EGOqUB1k5yzjIlnx547vgjBaGEUpxKJ%2BBoksY0M9SSCkydEM5JPKO2fTgoSIlfnFoZWU3QFEijzzJ67FRAE4qeZR0mNIq948GMCuyNghaE1errncpKQKNgdonrsmalPIFiySv5fO32q375O3Ic9eDU9ifeF2cL9W3Udkw1WkMUsaeNyiuGBBZu%2BybOLQuBa0P2shzzmddq7fZZSqUi9450u%2BcqQSHbFb6r&X-Amz-Signature=c3865a854cf57e88cbd1acd9a38270a7fa25ba13dadb0b56d4b0c53b78a28e89&X-Amz-SignedHeaders=host&x-id=GetObject)


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d2fb6d51-982c-4812-8b98-50d1998f385a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJK7WTQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYnceG431Po82dLn%2BZh417qU5ZDZ1LxeyYTXRnpA%2FhNAiEAsgRUFQIL%2BMX%2FQ%2BojlfFXfcRm%2ByqGQy7VUYBdjtA2mZQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPKa1a5Aowwg6qF4CrcA5niimwtsnmRz4rW6XLz0gbe8NJ858mGi41oBOTuF7UCVdCs2tbXEbcnk1GfxPPkb0WjxXrFAMo6NlkQzY9xyNg7R6ugP6bkY6RN%2FWyxPT7bMksaHpKbMBN5yLVKmTjf%2BjldeqHF9yW9BTEsTYVauCKgUrohDnN4dc%2BwDJPn4oFoqcPUldz4bneERWkg0o2xde4%2Bv5p0D27PbvoAD33O3DoBI%2FyeJ9RGCb4cnAXY3ob5kgK%2FKV%2B5WrdEAtwXZ4ocV3aK4TFdyXejRMosEmoKGqm7TvRBPrfFWJsejhOGOLGImu4z%2BEh5YkdWWcRSCCeOnd%2Fo5JjEmrajQ6OAmZeG%2BjcUwKCw0lg4VZfSB%2FIkrTwFGIXro8r1aFqhcy1VOFqbloaQVyCjEbSXcs2hrPQMYi3fu36ilsma9zczTNuH3VoD85hVb7YKoqKWgxkgxvxPwGNdorbhm5Skst8nMQqsuR44LbDvyq%2FM4bjZiBVGh8lMj%2Fkk9rSmledKjKfKD34d%2BkaIqGRTFJ3%2Bop4koRUex8wILrtJ1hlORbSNa3Giz3PyhExWCMP8P9Kf%2F6NVaEGjoKTlC8pSKbw%2F%2B2kDO%2FLpCWzMVx2mbw1lvZXPl%2FzMnbz8QGtTRvQ2ycVSLGAlMMrsh8EGOqUB1k5yzjIlnx547vgjBaGEUpxKJ%2BBoksY0M9SSCkydEM5JPKO2fTgoSIlfnFoZWU3QFEijzzJ67FRAE4qeZR0mNIq948GMCuyNghaE1errncpKQKNgdonrsmalPIFiySv5fO32q375O3Ic9eDU9ifeF2cL9W3Udkw1WkMUsaeNyiuGBBZu%2BybOLQuBa0P2shzzmddq7fZZSqUi9450u%2BcqQSHbFb6r&X-Amz-Signature=e4b9499c01c6375c798334c891a4077852165347a101a46bc7da8d8de812c4da&X-Amz-SignedHeaders=host&x-id=GetObject)


    ```bash
    root@controlplane ~ ➜  k describe po -n triton webapp-mysql-7bd5857746-mgnx6
    ......
    Events:
      Type     Reason                  Age                    From               Message
      ----     ------                  ----                   ----               -------
      Normal   Scheduled               5m44s                  default-scheduler  Successfully assigned triton/webapp-mysql-7bd5857746-mgnx6 to controlplane
      Warning  FailedCreatePodSandBox  5m44s                  kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "0e75f4d9a7100b74cbddd9f16c6e5d6b5c12c10dde1a22cb77041ceb54b7c81a": plugin type="weave-net" name="weave" failed (add): unable to allocate IP address: Post "http://127.0.0.1:6784/ip/0e75f4d9a7100b74cbddd9f16c6e5d6b5c12c10dde1a22cb77041ceb54b7c81a": dial tcp 127.0.0.1:6784: connect: connection refused
    
    root@controlplane ~ ➜  kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml
    serviceaccount/weave-net created
    clusterrole.rbac.authorization.k8s.io/weave-net created
    clusterrolebinding.rbac.authorization.k8s.io/weave-net created
    role.rbac.authorization.k8s.io/weave-net created
    rolebinding.rbac.authorization.k8s.io/weave-net created
    daemonset.apps/weave-net created
    
    root@controlplane ~ ➜  k get po -n triton 
    NAME                            READY   STATUS    RESTARTS   AGE
    mysql                           1/1     Running   0          17m
    webapp-mysql-7bd5857746-mgnx6   1/1     Running   0          17m
    ```

2. 같은 2-tier 애플리케이션이 다시 문제 발생. green 웹 페이지가 성공적으로  보여야 함. 애플리케이션을 보려면 app 탭 클릭. 현재 실패. 문제 해결.

    ```bash
    root@controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS             RESTARTS      AGE
    coredns-668d6bf9bc-fh8vv               1/1     Running            0             81m
    coredns-668d6bf9bc-q8q47               1/1     Running            0             81m
    etcd-controlplane                      1/1     Running            0             81m
    kube-apiserver-controlplane            1/1     Running            0             81m
    kube-controller-manager-controlplane   1/1     Running            0             81m
    kube-proxy-j29c4                       0/1     CrashLoopBackOff   3 (35s ago)   81s
    kube-scheduler-controlplane            1/1     Running            0             81m
    weave-net-9hwhw                        2/2     Running            0             2m17s
    
    root@controlplane ~ ➜  k logs -n kube-system kube-proxy-j29c4 
    E0411 01:35:34.015213       1 run.go:74] "command failed" err="failed complete: open /var/lib/kube-proxy/configuration.conf: no such file or directory"
    
    root@controlplane ~ ➜  k edit ds -n  kube-system kube-proxy 
    daemonset.apps/kube-proxy edited
    
    root@controlplane ~ ➜  k get po -n kube-system 
    NAME                                   READY   STATUS    RESTARTS   AGE
    coredns-668d6bf9bc-fh8vv               1/1     Running   0          91m
    coredns-668d6bf9bc-q8q47               1/1     Running   0          91m
    etcd-controlplane                      1/1     Running   0          91m
    kube-apiserver-controlplane            1/1     Running   0          91m
    kube-controller-manager-controlplane   1/1     Running   0          91m
    kube-proxy-ztjj8                       1/1     Running   0          6s
    kube-scheduler-controlplane            1/1     Running   0          91m
    weave-net-9hwhw                        2/2     Running   0          12m
    
    root@controlplane ~ ➜  k get po -n triton 
    NAME                            READY   STATUS    RESTARTS        AGE
    mysql                           1/1     Running   2 (2m55s ago)   12m
    webapp-mysql-7bd5857746-tlttr   1/1     Running   1 (4m19s ago)   12m
    ```

