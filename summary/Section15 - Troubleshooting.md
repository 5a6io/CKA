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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/589d7af2-3bdd-4c9c-a588-ac45518b06af/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3BREY3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDaknxwiDuOhTZ1L2wRo4%2BUEnHlH3xMUuwpEeH1BbwIBAiBO9T%2Bqx44u%2BUGU%2B3KQOyh31oRDcQwa4cZALBW0TXA0ZCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVRUcgkSHCIKNhOeKtwDkGVq9k%2Bt42Y%2FugIc7GUl%2B%2FWUXpKbQuNsMdgnfMGloIZoKSAWzIEqVR6PxZ953F8Zw8lxU7nhbGMKabLEwrNclmrwcFCAJj%2BJkfKZVg95qaRfw%2FATmuGRtC8ddDInW7amL1YN3KtNjDyPcfLsrGIeUT50oy3MmVyGGHG6I16XwXVqJLRQaznd%2B%2BniuTQtl%2B6idKlfe1XRArnwlHgjai83t%2FpswR0zZG9cCZCmOi%2BkNBeCNg7ufTi9EJRyg20WCAgc8czELEbNME6OuNYxhoNWRVBo4UzeTYLoHjevjx9sjrJgWactmpwRc5cyvfK7WDaAKAwK3uMVIleawFNCWO98tZxc1KQTBasTjFU5n1bLtNK3qBpRurPEvmD7%2FJFdRAwOYEHG3X4BNPTfgBsEkL5b2w0O4OL05tKYEUj0U3XDzy9e4mPFPXLjtF3LdntFp3vCbshZDpoe51aT3h4cAm0zBSh2%2B9BXEQQG15FeofYBVCfhwqylMZJ00WqERH8QyzJko9z%2Bty4HiElEBEuIrIc1ANgpTUDuImqihC%2Fp0m6ByWVz9sg3904B6Hm7lDv3PvjMffrFT%2BUNJa87vzksuFR9Dp%2BrZWzEW8NMKOSVTL813vra%2Ff39L%2FsV%2BGMxzRYwof7ZvwY6pgGO%2BjauDwz6dHj4rTXLnkv3tAHiEMcKihSb9zJ8%2BwDUGsmjVqIgSs9BNBSxCck4PKSOqxAhNno%2BWBdNxOZQUM8Tq%2F2%2F2hKIQHafSe%2Fy74mdpf3MlKYDuNlAE7wk%2F0u6DPFhlrQdgAODPEQUbkMNjbERmgxzoV1V2HKp4RgIVEvon%2F%2B8bBZvrkdJIxnOW%2FUH9LiOK7%2Bl7kHdVqEzBCtNY2aYnnqxFH9E&X-Amz-Signature=42b8cdfd117780a2ede0030314c14ede55ba7b8b2ad347868f629256b5406675&X-Amz-SignedHeaders=host&x-id=GetObject)


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/ae7912dd-e66e-487e-affc-c1bb880f3aaa/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3BREY3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDaknxwiDuOhTZ1L2wRo4%2BUEnHlH3xMUuwpEeH1BbwIBAiBO9T%2Bqx44u%2BUGU%2B3KQOyh31oRDcQwa4cZALBW0TXA0ZCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVRUcgkSHCIKNhOeKtwDkGVq9k%2Bt42Y%2FugIc7GUl%2B%2FWUXpKbQuNsMdgnfMGloIZoKSAWzIEqVR6PxZ953F8Zw8lxU7nhbGMKabLEwrNclmrwcFCAJj%2BJkfKZVg95qaRfw%2FATmuGRtC8ddDInW7amL1YN3KtNjDyPcfLsrGIeUT50oy3MmVyGGHG6I16XwXVqJLRQaznd%2B%2BniuTQtl%2B6idKlfe1XRArnwlHgjai83t%2FpswR0zZG9cCZCmOi%2BkNBeCNg7ufTi9EJRyg20WCAgc8czELEbNME6OuNYxhoNWRVBo4UzeTYLoHjevjx9sjrJgWactmpwRc5cyvfK7WDaAKAwK3uMVIleawFNCWO98tZxc1KQTBasTjFU5n1bLtNK3qBpRurPEvmD7%2FJFdRAwOYEHG3X4BNPTfgBsEkL5b2w0O4OL05tKYEUj0U3XDzy9e4mPFPXLjtF3LdntFp3vCbshZDpoe51aT3h4cAm0zBSh2%2B9BXEQQG15FeofYBVCfhwqylMZJ00WqERH8QyzJko9z%2Bty4HiElEBEuIrIc1ANgpTUDuImqihC%2Fp0m6ByWVz9sg3904B6Hm7lDv3PvjMffrFT%2BUNJa87vzksuFR9Dp%2BrZWzEW8NMKOSVTL813vra%2Ff39L%2FsV%2BGMxzRYwof7ZvwY6pgGO%2BjauDwz6dHj4rTXLnkv3tAHiEMcKihSb9zJ8%2BwDUGsmjVqIgSs9BNBSxCck4PKSOqxAhNno%2BWBdNxOZQUM8Tq%2F2%2F2hKIQHafSe%2Fy74mdpf3MlKYDuNlAE7wk%2F0u6DPFhlrQdgAODPEQUbkMNjbERmgxzoV1V2HKp4RgIVEvon%2F%2B8bBZvrkdJIxnOW%2FUH9LiOK7%2Bl7kHdVqEzBCtNY2aYnnqxFH9E&X-Amz-Signature=d210214d25e01c1caba4fe4d07a9128d8ab1f10d0b61773996f611d7d53f9a70&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/cd4ebe10-dd16-4e22-9b8d-e488b94023cb/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3KXM4XL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBbERCycTMf9Zi3Z0dmZ9fJsfdVqRh3cux0Jr3Q%2BcRjmAiA4kPzeGawh3FuMwOVJPrjUW5k2IE78r5uAihuWKtqy1SqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwwvuy2eePKFPdGLKtwDPX6AA8E2uzYlEkYLcmSRMcqmo9WgevMTtH79mD3VasIduvESg0n%2B6I3Xz0s%2BSa2CFL%2Fe095o3ESkxb9KVTTV1Ed8L3EyBkE7k1GIHugKdrzN%2By6w1BMYQcV7Y%2FA0DfeOM4EddyvjsauRoNncH63NJDqhgGtU55Jx0Vjwh4LPyXKuSU2WeqVeyjQrykXOKkb02lQhXyvV9lW0XIxm4B69dkLq3Xe9ao2tPSZI4J2gPpZMhPFmg4vJK0%2FXsjJ%2FjHq99duXIDo3%2Fl3Fz4GuzSzzi5MVi1M0YNKAUtFbPUFz6ZoOEjo6O2MP912nqyCqbr9oYkzWTalvGNcjOH0WY876LMxjokedRLT%2FLTvznAoibU9CMCBl684RAuXczNmyzEQ%2BMpUPoUdm86qgSIXjvwZ7BNk%2F4Ley%2B0bRo1V%2BavqGgk1PA92RdvPtg8XSt%2BUck7ojFGMUyuR0rdXKPgbOoVmg6rUwqSz4cXw52qA6QN30WifE1g6%2F1b8c4P%2B8dT78PF5GD3YrDQMz4RkhukuhPknN5HEd2HHR2K5urRpeSKnIbxtx%2Fgks0Sada0f6OJri%2BAGstEXESIX6U9Mnp27GbA6%2BpMOeMMZBxbpBQ3i1Y8k06iMJV9481iyuJEVSF2gwyP7ZvwY6pgH1Fbm6ZVaGoaHlj6Wzl2KmzNnNadqE%2Fs7iP%2FXJIil4ioCrcNVRT99UBz3Srrjd62Obw61KxkYfv93n7iYR4oYWQ3ya7RLtVn4JyMA0V8TFieTjB7dmSca76q9o80lJC47hi%2FTy4ukL2Dl3TNhwmF8sVd92PSQxXHDwMx9iXuQgAGR2BfOUhf0sO9Sooh8AMLtZJN3v0hSrH6T%2F1T%2FolMUOW8QDv7lR&X-Amz-Signature=9a3b1662a93dc6a06d48c7e1b6f74ef98d2a3b62198f2e26dabc137be6a94c28&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/21708f85-5d81-4c4a-8d94-3feda2068e48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7FXTID%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFka%2B%2BUfTlBV9kSi67LxfrSoDUtHXRvIXoV25aSOhc2JAiBKiFELolF35v7Dy1sVBqPVXFlVCpPcYjYoirdQLBvzQiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjVLu3lGWtCLOo5uKtwD3zLW9i6IpvVppE6S0l2iCTmEzDPejj6EVTCauxNTYGNOnNZuzdHoNh%2BWiS3gzfwg7ciw81c3EaeznbuLVAPFvQShyosnhesmoUaOWWetD%2BOYE3%2Fh1gLb3Kc1TWS37D4ZVfgtoqHpqKUQ%2BI%2F5WaKQS05HxbqAZ2YUY%2FGU55mLaokpt6PsA0H5Ngr3hyBrTM1OThKjP2rt%2BJJBjZnj%2FKvHxObKHEPQGZ01fCuJVOjQOY2H0jkXFo6J2rXmr2dc5THqaGbQ6rTguJ%2Bk%2BMmfb7tl2vPz5hXll4HYPuMSimCuDIlFlOktOoXZ4kgROS0nJDi92UyR4ASKzuGoZ80RaSeuHIw84Lg5etRkBpyXTl%2Bzuktq%2Bq8r0sUjSUP6qq%2BkErqhOpdUZr2ChISSJ9nxfDczK1uCb4B%2F1kUHXIY7EDJFaLkXTKRo3bG%2FjlDc6tgJXSha%2FjFxZkCwYkemZKgE53axPjMFn4VPcGT3FyGUcsOFDAQjaRAd4pipzTzFd6%2BFuHQ2C1CXC0DtM3s3E1vsx9IACXDYz5DIaw7dnqhYehXydc%2Fr2BmdEDQBDw5foOyKxIVh8D04g%2BrlHg8cRtJ2Jh6r1tjx5tQWZG9nJEPg4Up8yddxJKj8ePry%2F98ab4Ew3%2F3ZvwY6pgGCHx2MhCuxF%2FJbvaHQDmjgADRa3IzJoo%2Bk8RiLGfrqDtkpm5QlZSby38pYl%2FK9RPYgBHd0MyCgFW0YHJZYO7H5bOmWrh7pETIA7rzqBu5b4u5%2BeyJ1V3htyJZcMiK%2BWQefkWuVYach%2BlnFsGWZ8YoTeZnX%2FwCWnijvXIxZ6935uYNR9nPMPAF3YroyTUlVJEFx1RGWAjNnyWVciiNGowW68bhioRMJ&X-Amz-Signature=fced4821311e40d42cc7b0e282465e2af51b41951648d049f5e2d48aceb17e85&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e2c5b54a-2cdb-4456-a5eb-c53c3ebe8c58/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJG235Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCNAjW3cRoplsfzJdPx2YJpQqKUO2z7cEy%2Fw3%2Bvb02GTAIhAPPKZdJmyiz0tXGOdgEV44Heihy6f8HwHiyMkduGeh89KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhWwmbxJOKp6LpXq4q3AMqrxbBTGYerxsLz3eCepETCQoLpvePPdjEpHAjdiRM36MNfgsirmC4TEBdIioaaQzQhvMOkuLjBvImp513GJYDkr%2F2198ToGfpYSp%2F7p68UnuzmpWALt87yxi%2BrDwROZEv%2BvhzGicZVhXkozL2SUZHUaHlZBaSIFqL68%2FpSqy0eZ%2FnSWwssqLHNMfQIIs5ECZOHdNaX%2BMNHf%2FkxnlVEe9nUtWRsvse8Lw08Y3TdMVGRIhlx7BzkTKrKkv1ae9cjXPMWrI%2FCvXbJu87PsJ7TFG4fHB84QzFgm77FUkyhFstY7BwLkhncOhDgVpcgDEQ%2B4ohui4Oyc6SyA2i3TVJS%2FNanX61VPS%2F%2BPFtbEhMJCEqfUMCvO015oSHJ%2Bu5GuAGAI5TkaXxhmB83SUmedjApQXtvXgTnL7zr%2FZzdQHwa%2FlRfjqi7EZz9hNHMl7yofNdzaEzf6bJy73QDKCWWDX1scBIh6V1dszkmEZWdMV5iPJ%2BloLju5KSm7lbdL5J70gZ1gZ0E2uYlmXX7X1MRZuTjmKNfEi1XVR%2BWsqWOIdcD%2FFpwOmUxJWzNc1QGTvEwxFhmaD3zgeQywkBoqK9TY5j%2B%2BrdH%2FZnDyVvvTnqVzovl2Lzyp3yAHRRopDGXZ5QrTCx%2Fdm%2FBjqkAYeotijYBF%2Fn8a7xGDDem9I37yZn4%2FCjjO6Pk8dIQZbeLuVVk0DKNuzPjax25u5hCzHK%2FUFd74JpOChP5YqKh2WXVCwGANgRy199mMgYFAyoWk458gk96tOHdW0B%2F4jfBgqM65sLGcYV9p0j8cwRpIWwc31QqWW3UX5f2tG1Tu%2BbBW4exeN28DEV114zbsOeNvhyFIai1uqH1EqCb7IwGZZ0qldq&X-Amz-Signature=a2847edcc1d15cc4e602a2340500628164cd2a0c28f25694e8dea85a1fbb71c5&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/636892d0-f438-46e1-b54f-3b5802587e41/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7CXF5V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCuhm%2BPeQzkZOXRHdoqO%2FVBQfWZcUzMYZRm5KQ42xTo2QIgFW9lzQxJWRrWnNkFx1Zm1xYrY%2F59eIkPr%2B3BOio7c74qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtTCDgshjjoc9BSircA%2BV6xiWf%2F7OafHtKS7CKmE77RfR0DNSTCATS2mMTt%2Buh9ZoIOlAicjZtVMWZal57rt9lbLvEgeqzgoTqvPvGjiyyPVwVpcmhyo8Uos%2FNtJ3VitzqFa2OjJo0u2jmoEuIUEDlc%2FUkBKdtROSqldzOom9bnEFJyYhY7oibojc7wpdoyzrKPO8c%2BDnWJKhAH7NxjauP3LUSR8z6M%2BjVVbrW3E9ntW2t%2B6hHXErc5ITK4ctrQd9mV8daEn36QROs3ZkITF9Ia8pehnon9vcpiDkSk52QMhUgk4VBrNkWBC27cduohzhvVtvJsYnsOMMgYf9wJGmxFQ6Wv3FGzuKxki%2BuRPl8ZfD0k9CWAbkqElYoj852ss3IUAd58b5QeoZuaNmriV4VQtLfNYiEofDy8CKqXkPDhLJDxbytSrD5E1LajygNGvY3UMMxkyo35UKXppA2iM4PNUqc1zvfVHB9EmpqC4t8uZVfXmsV2G3J8m6lyKXzXDrou7jh8PXY5bsBIzHbtSZxiYenMoRnf4CaByrqMIjOnJyhbPg73MzV%2BtpVSJA532IjDYnjEiLN%2F7%2BOYefmmnrde4PkS%2B%2B2JcmMvm1J5nF2t98UicXVps5oKBd1LTBdJ%2FEWlndmMwphPQ2bMLP%2B2b8GOqUBUZbuq%2BZW2FsGQesmoCn190EHIwnQpyT%2Bs82mbYd0zHTudJT5BRgC2FgRCScJ7y22Fv0LtGGZ7UfPmb2TVGFCyJLRzMQYOGohGzHTKwekngkziY7iesVJ9Yq0fJmgdOPpAI4%2Fe8m%2Fwe2%2BwSdMR8vfqiHnofS%2F0h8zLjkpKc7A%2BRd%2FGGdyMcYNs7dCb%2Fj7iHWm53ehrgkFACp61O7vZcdMBlVblBWV&X-Amz-Signature=554873c453ebba51537081c90518e8e3b296cdc3cb8e4454cc1ec94abe074c29&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![36e1a636-902a-47cc-9047-01d0b4cc6105.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/d9828d96-9f33-418b-8bb9-9839686316a5/36e1a636-902a-47cc-9047-01d0b4cc6105.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4KRFSZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDLVWa3f4EWn7CwFyZJHL7aImlEzlW81DaR2yCi1YTA1AIgOZzPYaGQdDPl4PKIJ7RbMckY%2Bm9UoBOAe36aUq9vZzEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNibWnqpJpo8feCiTCrcA24jLpEt0%2F49nxxfjKKQ3XXN1BmfVtt97pOY%2B0iJKNqr%2BKNzVSxbwhhgQYPz4tk4ItpM9ssvUOXEk7KjWjSl3X9KAFfYix%2BFOPguP8PoG%2B%2F49nQJoOHz7656HeCIweokEnZa4M212jo4NzlI9FXADqkRBW%2FvriVp9GofYERaSyiq65AYwdJmer1MLjfHxg%2BZeWONMeYpJkceNkxwDl0rmlA3WYXBiiwvA5J2lNVu7GntWw91uLpnY6y0QLKZoRDpRKuzuB8eyvLSAC5jh%2BBIosgNHWBP%2BPaMbl80RgBGdLhXO9JhJ7%2BpQX2fDweQQhZf7IkVYjV4lwwPauWsKM60wyxw%2B21yY9ZPzZ%2BYXkj70aFkEkkZF6HDbttwW1bhKbruQUrGzgvQU20mA5jO9zoIpzQlda1i40hKR%2BV7G9pdOGw%2FRVXSjefpVH0avU%2BfWxDPN4gOdODB118SypDbHT5%2F%2F87Pv7WMEZGoj21M1QAtAQOQdqkyABWcSrG7KcOh3wgNybp2PswqMNJavFtIMuHfREXtYbzcQFDrpMCNxaVuyR%2FoqY9b6R8W%2ByBJOYO6%2BFJJST0JRyTY9X4cZdI2iN%2BPu7A7mP31JaEnvwGnYqHUSdDL9efde0GHDfYbULeRMKL92b8GOqUBHFaEGP7t5heXvZKkwRt3UqRiiSMJ7syrGAyoemgF1m7dcD5TpHJvK4uSe%2BRie2%2B8YljlvIBsBwTLItDpUxwe0xVE5a4FGuDaG41WKfw1psMxknKJaWixzZhZ%2BVbehGkkXRudE4tQahcSX2Az%2Bd58PsizFXOaJw4aBMCSxqHRSZwCAyxgsHbq5F9CivSkSSb6M2CHIoupDgJIPjS9%2BUw0r%2BOkJvWr&X-Amz-Signature=c168a3e2d45b674b135ae0ae7a465458ee9fa85b5642edda0ad99813667c0d22&X-Amz-SignedHeaders=host&x-id=GetObject)


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


    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/ed76229c-cea3-4635-a7f0-f6ffa62d9fc2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4KRFSZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDLVWa3f4EWn7CwFyZJHL7aImlEzlW81DaR2yCi1YTA1AIgOZzPYaGQdDPl4PKIJ7RbMckY%2Bm9UoBOAe36aUq9vZzEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNibWnqpJpo8feCiTCrcA24jLpEt0%2F49nxxfjKKQ3XXN1BmfVtt97pOY%2B0iJKNqr%2BKNzVSxbwhhgQYPz4tk4ItpM9ssvUOXEk7KjWjSl3X9KAFfYix%2BFOPguP8PoG%2B%2F49nQJoOHz7656HeCIweokEnZa4M212jo4NzlI9FXADqkRBW%2FvriVp9GofYERaSyiq65AYwdJmer1MLjfHxg%2BZeWONMeYpJkceNkxwDl0rmlA3WYXBiiwvA5J2lNVu7GntWw91uLpnY6y0QLKZoRDpRKuzuB8eyvLSAC5jh%2BBIosgNHWBP%2BPaMbl80RgBGdLhXO9JhJ7%2BpQX2fDweQQhZf7IkVYjV4lwwPauWsKM60wyxw%2B21yY9ZPzZ%2BYXkj70aFkEkkZF6HDbttwW1bhKbruQUrGzgvQU20mA5jO9zoIpzQlda1i40hKR%2BV7G9pdOGw%2FRVXSjefpVH0avU%2BfWxDPN4gOdODB118SypDbHT5%2F%2F87Pv7WMEZGoj21M1QAtAQOQdqkyABWcSrG7KcOh3wgNybp2PswqMNJavFtIMuHfREXtYbzcQFDrpMCNxaVuyR%2FoqY9b6R8W%2ByBJOYO6%2BFJJST0JRyTY9X4cZdI2iN%2BPu7A7mP31JaEnvwGnYqHUSdDL9efde0GHDfYbULeRMKL92b8GOqUBHFaEGP7t5heXvZKkwRt3UqRiiSMJ7syrGAyoemgF1m7dcD5TpHJvK4uSe%2BRie2%2B8YljlvIBsBwTLItDpUxwe0xVE5a4FGuDaG41WKfw1psMxknKJaWixzZhZ%2BVbehGkkXRudE4tQahcSX2Az%2Bd58PsizFXOaJw4aBMCSxqHRSZwCAyxgsHbq5F9CivSkSSb6M2CHIoupDgJIPjS9%2BUw0r%2BOkJvWr&X-Amz-Signature=ceb84bea2fa40d4c48a10fb0b3ee0ccf5c12de9c71740019bf0be28520148a4c&X-Amz-SignedHeaders=host&x-id=GetObject)


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


## Practice Test - Control Plane Failure


## Worker Node Failure


## Practice Test - Worker Node Failure


## Network Troubleshooting


## Practice Test - Troubleshoot Network

