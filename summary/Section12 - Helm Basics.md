# 🍨 Section12 - Helm Basics

## What is Helm


객체를 생성하기 위해서는 모든 yaml 파일을 apply 해야 함 → 번거로움.


troubleshooting 시 issue를 찾는 것도 어려움.


Kubernetes는 우리 앱 전체에 대해 별로 신경 쓰지 않음. 우리가 알고 있는 것은 다양한 객체를 선언했고, 그것이 각각의 객체를 우리 클러스터 내에 존재하게 만든다는 것 뿐.


Helm은 그러한 것들에 대해 알기 위해 처음부터 기본적으로 설계되었음. 때때로 Kubernets 패키지 매니저라고 불림. 객체들을 그룹으로서 큰 패키지의 일부로 보고, 우리가 작업을 수행해야 할 때마다 헬름에게 어떤 객체를 만져야 하는지 말하지 않고, 어떤 패키지에서 작업할지만 알려줌. 그리고 패키지 이름에 따라 해당 패키지에 속하는 수백 개의 객체가 있더라도 어떤 객체를 어떻게 변경해야 하는지 알 수 있음.


```bash
helm install wordpress
helm upgrade wordpress
helm rollback wordpress
helm uninstall wordpress
```


## Installation and Configuration


Helm 설치 전에 먼저 로컬 컴퓨터에 적절한 로그인 세부 정보를 사용하여 기능적인 Kubernetes 클러스터와 kubectl을 설치하고 구성해야 함. 이를 위해 kubeconfig 파일이 의도한 Kubernetes 클러스터와 함께 작동하도록 설정해야 함.


[bookmark](https://helm.sh/docs/intro/install/#from-script)


## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치
2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JUVIH4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDy%2F%2BPLSECjU%2FibgM9mwsa9y0AgpeR6JqmImQO52vm5nwIhALTJFAaSBcTM9qGYWwun4Chnb8b7JJdU2h%2BY7ER%2FFgNGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXnPwgBI%2FP6gG4zlwq3AMMrsxyVJrt0UvZrHtKy3I7r5lvHhxImjZefC%2F6XrDwo4bFffjSKkeqfPytU98ZLgte1c8vjjmi3vBFSFFa1WPLJpuDWiisKYeRrjaOEpvRLHUu8%2FeVu%2BVcJIKqKLfcOVEZET11bY2rCjMraC7BVmPNy7Jgm2P9JSMFgSnPm3RlQK497kHkcTH7884l3zF2aiXjs6dWpbMFCg3kBhR8HpfD3eWCk3GY8Nt2tloscqiCIMFnnCfU7P5gY0Eh54vQ7Mq%2FcTWfIUJFzv3mLmjs05y8gLCN2yIgdndVAARalkK8X0GEnkq7J77gkcOJ%2FwKakJUBJ2K3ve7jgCYi7UlEcA9JdnuKrHM8DCpL4c3dTu6AzgwRoYMVXtSTbH4PhiCxQREemaZTWOt2TmE6YPjUOKBT5XVDyq9wi7S%2FDyH8EeAYJ6d3%2BgaNla0wp1%2Bk3c7Or5d7uB3%2FMd8NtegLRi5sxy5%2F6%2BJ%2BI%2Bg3sfj6Ru5QeOfvBHNZIR9tWMxtB3GRcbfqSS4MocGqn6%2FqxwQl26%2BCJg%2F54eZkbqpnIDoNc7b%2FMpRGohTATX42WvzP%2FUVUYSygpzjfb84EQHxxbzUoNnG0a1464eK8rIEE5gbGlVEORMsQSVItaO0niHnDRGfYZzDxg4jBBjqkASHBZyWy6dv7gbNRKgccpKx5FbF8843Lb2FejoqQNwFmuTf3SDauYBO6Sr%2BiLSige3pFe9ejyKQDnds6bh7ub%2BREGjStd6hi9AJDrZsMst1HxJ9ocjw6wAOvfnj86nHEciZ1%2B20x1M3BnjjR5Vk%2BwZWjeTJnxvu9dkZ4yP9Ct3%2B0qE2KvHxLCD0vUzYxCuDdH5TUc9ZwH0ynLHQyANo8zRjCCyJh&X-Amz-Signature=6f2f4f56170a6ca9112617ddc894fa5a91724d81b6360e8a420733c77786ad4e&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEBY4XO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjQicIexPyOBabHtlWfXaVPUSPlTbeOAIpFnWWvoBhjAiBQBjuNuoMU8Xf7lqhtXAgw9yZ4EtSbvju%2Fq1uBFyqgHCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo4Pqnln7tVDcDqchKtwDhaeXwRpLs1A1gXFi4b23fZWrouiX53CfYXVytY2gr2SK57y9LzI6PIkZw2tDYnRGc0GdulfGOJfRlaX29v4t%2BerDtdh2BFewAJQBfFbrdmXJoyLvE6X8G6%2B3QAEtHQvmp6PFlMU4XMLi70%2F7kUvfVpbRUClJy90bVYy5eq8PXy72bdTfoIZcPBMQYKdpDoorXWiljDEXBcB45nnhykd2RB%2FmQogTElPBmd6AEEMib9bLvrHc4AcsTSlNMjEvlMC%2FWCklJd7QhcTzD7qSj98XvBrplcmciI7GqTUuikdgCIaXr3qbXVz%2Bj7RE2ZLKAWn7D7fKQZxtrJ6z2Bmryr8kCgK2Otbo1VAyuBXHyesjkMS03yli7FfJHDytO1oqN4oRRjORHAYE8aFTXbqb70FRgXHJLO94OVxPS9L2PWV3kfKcdL%2FbBl8zTlyAHNet4Wm6LKEMM6JGkU6BzXbIpG%2B87OKfOJYXecWYacfsYoJ90mlLWmmthGeX5tb32W%2BniOb3V97Dnetto%2B6YZcU%2B4SpMO74hA2rLqMsvg%2BWDnZHHAlsciWBHKnrwjmDPUumg67juCZ04zcJJ9BcDjaLDHfiLsWVZocSA3%2FPg2s4pSQyKLTnRv4mAvsbX3xM5uWgwqOyHwQY6pgEnAAgrGoMUpYJyWfwmDyioc1cHH24%2FaITtHxQlYdkUszyNgGjw3CuVRjzaqyL8ig5SDgikQWjR9xVW%2FCm2eYRHgrLdkij6Qihd8cVWb2v3k%2B4N6cP5dGmRcdNDYQWhXNvucTji6Tq8%2BcHmOwfJhJCQOP2Rgpn558KmcVMWwAGC8Exp4L4hzAtu9JDU2sTyLlp6eVdRRGKe2BDLvPc89Qh55i4i4a%2Fj&X-Amz-Signature=ec96069f7fa124e3182f56112162d8f2d6eebffdfba02a8b9c1bb80fc3059f87&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4VOSI3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYodDSrXoHjRlEZXTTbVD6Tl0JPG5FFK8GndxlrzmhPAiAoe%2FPqiMColQHaPRonIaXmrJJi7ZStFdYFwFwt6lZm0SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcOPugACGMRjXak%2FKtwDs%2FrJiKme5o0mukk%2FYz6wDxaFH9M0ThQAG0a9A6fOWpYFzx07YkKi8dxLW3gIGaiz0Uec5%2F6nwv%2BHgsTnXtvCeJ180dPXYqWRZgL1qU7AcXVTVgwWlESePdKPWGWfL%2FY6TqVgfopO5Tv0nITkRtHVxloDpPG4FjaZLyXUvQ2lNZHTY59vTjMYpCMCJWr%2Boqt4%2F5ZOkzxfGT1VPaYIdjxNB%2BTMpFDRfp%2BMkGskN3LFQP1Xs2Qv0V%2BL%2FsFktjJG1js2B%2FarUVUuayt078OBqvXpslT4ck0OjO%2FLx6LXO4mfccMVMCuuxQ40VRs%2B7EYxiDbS2fC7qYUT8g7SXOUvvq%2BGBc0bBlZGhKLeEX6ybTiJbdca3%2F%2FFgT%2FV8h8ZhmTYWG0O6sdn8kKo3byTIASIwPaCENeJaSCx7njzQITOhSHbW%2FHYQDKUD6o1OZlKrKxCliK2ElQrcgkb5YxftEgzMdBZ3m6Wjw3lfc%2FPIvKOpEpCRSQwD4JIELJoHn6FUwa7UpnIx39vUDdCIkGPCgjWNFM8iDDEer5Ltuhec%2Fco%2BbyGFF1waI0mE%2BVy7fcoNvzMTS27r57oSH9eoB%2FwXSug734%2BaNI7o5spLs6qUjIDPEIk62JEeuSr2n%2BOLAlp14gw9euHwQY6pgH8KRDkeZlET2jTUXsCsJL3%2FYU2B2IJwTmWaa1qLolD%2BrmdeyE0Z286VdClR%2Bd%2FSrMiw3S3MINtNYkiZMgyjjsfZo%2F2wOCQxQGWvHWOqDoWwtGyyDXVb0IyQzTC135vIIWxgkAajAANs5mtvt1GIJ%2BC9B2pJKO0frPmOloNI5bN7TbLL%2FDON7qNgaS%2Fw5i19ceO4kvMRoAzHAb0nAQ9tEe2EJvLX2V8&X-Amz-Signature=dcf79ed7265378aa2561c26aea78f71394c9c18fae53bab6c1c4f4932098db64&X-Amz-SignedHeaders=host&x-id=GetObject)


## A quick note about Helm2 vs Helm3


Helm3에서 Tiller 없앰. Helm과 클러스터 사이에는 아무것도 존재하지 않음. 또한 RBAC를 사용하면 보안이 훨씬 향상되고 모든 사용자가 Helm으로 할 수 있는 작업에 제한을 받을 수 있음. 이전에는 Tiller에서 이러한 제한을 설정해야 했는데, 좋은 선택은 아니었지만, RBAC가 Kubernetes에서 사용자 권한을 미세 조정하기 위해 처음부터 구축되었기 때문에 이제는 간단하게 할 수 있음.


|                                 | Helm2 | Helm3 |
| ------------------------------- | ----- | ----- |
| Tiller                          | ✅     | ❌     |
| Three-way Strategic Merge Patch | ❌     | ✅     |


 helm으로 설치하고 kubectl로 이미지를 바꿈. rollback을 하려고 할 때 helm에서 현재 버전은 이전 버전으로 알고 있으므로 변화를 감지하지 못 하여 rollback을 하지 않음. helm2는 이전 차트를 가지고 현재 차트와 비교. 사용자가 수동으로 바꿨기 때문에 여전히 바꾼 버전으로 동작.


반면에 helm3의 경우 사용 중인 현재 차트를 비교. 되돌리고 싶은 차트와 라이브 상태, 그리고 현재 kubernetes 객체들이 yaml 형태로 선언된 것처럼 보이는 모습은 three-way merge patch 이름에서 유래됨.


[bookmark](https://helm.sh/docs/faq/changes_since_helm2/)


## Helm Components


차트는 파일 모음. Kubernetes 클러스터에서 필요한 객체 모음을 만들기 위해 Helm이 알아야 할 모든 지침를 포함하고 있음.


릴리스는 helm 차트를 사용하여 애플리케이션을 단일 설치하는 것. 각 릴리스마다 여러 개의 수정본을 가질 수 있으며, 각 수정본은 애플리케이션의 스냅샷과 같음.


다른 사람이 helm을 통해 릴리스 작업을 해야 한다면, 이 데이터의 사본이 필요할 것. helm은 이 메타데이터를 kubernetes 클러스터에 직접 저장하여 kubernetes secret으로 만듦. 이렇게 하면 데이터가 유지되고, 쿠버네티스 클러스터가 유지되고 팀의 모든 사람이 접근할 수 있는 한 헬름 업그레이드 등 원하는 모든 작업을 수행 가능.


## Helm charts


deployment와 서비스라는 두 가지 객체가 있음. 그리고 이미지의 일부를 배포하는 표준 deployment와 이를 노드 포트 서비스로 노출하는 서비스. 그러나 이미지 이름과 복제본이 다른 형태로 지정되어 있다는 것을 알 수 있음. 이것을 templating. 여기서 values는 values.yaml의 일부.


두 파일(deployment.yaml과 service.yaml)은 템플릿. values.yaml 파일로 values를 사용하여 커스터마이징.


values.yaml 파일 외에도 모든 차트에는 chart.yaml 파일이 있음. 여기에는 차트 자체에 대한 정보가 포함되어 있으며, 예를 들어 차트 API 버전은 V1 또는 V2일 수 있음. 애플리케이션 버전을 지정하는 데 사용되는 앱 버전도 있음.


helm3는 apiVersion을 v2로 설정.


type은 application과 library 두 가지가 있음. 기본적으로 application. library는 차트 빌드를 돕는 유틸리티를 제공.


dependencies. 여기서 wordpress 애플리케이션은 2-tier 애플리케이션. database는 mariadb로 자체 helm차트를 갖고 있음. dependency로 추가.


keywords 리스트는 public chart repository에서 차트를 찾을 때 유용.


maintainers부분은 maintainers의 정보가 있음.


home같은 optional 필드가 있음. icon은 icon의 url과 프로젝트 홈페이지의 url을 공유하는 데 사용됨.


```mermaid
graph TD
  hello-world-chart --> templates
  hello-world-chart --> values.yaml
  hello-world-chart --> Chart.yaml
  hello-world-chart --> LICENSE
  hello-world-chart --> README.md
  hello-world-chart --> charts
```


## Working with Helm:basics


## Customizing chart parameters


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWAMUN6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDawinqIPpMDqKuvKNnzhIQVWUnqbu3PAdd%2BKC4eKGsqwIgAx5rpgiyfjlWrc1FFZKLkEAamk4TrPEHQODzxVZTOK0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuoFdc0LD44ogwYlircA2wpMngQ%2BUZ7nhbibFpjgJSYpeR0q97LjNp0R53y4LLZEbSxtzkxotw3Yg8kePQtdB8%2BBO29wIaTY%2BDwGbBjXEIl2PKt074L0rXdGdtZcgZtNAQmSNCttiMY80ZJCkP09hsw%2BhJadzruLghFsFvD%2FHQOrCmKgjJjWGnZFNiiXSFG%2B%2F8LdvS2N4NEM9iSZEclN4jLcM3b2zrsEj4bGCUBCaoJMo9UbS3%2B9SpSvE%2BhiU%2BMO5oiKDG6RWvAYkYMi8YDmkYBE%2FVNqcJMILiw0%2Bon0nAT5yEzWB1ZmVI%2BtJULvrWtrJjC3wMGUPN8CXXquGZhye3vytMc0Bo6N%2Fbb68aKadKBoelU3lnQUm1v4mQOXe0iKvbXIvStNdyWSoC7T3rPS%2FkOLpELZXzpCtOOpPcQOrywypuR3QrPx8WEXmSUlNi0vIjz4qrrkF1wsctC3I%2FLSvPnAAXc4LdmpliDrx%2Ba6gvIM4QBpHU7a3BWcN3Odt%2F5BCL98cNeJIsYb6Czk6b7fJPoinBMzXh5MFG%2BwRj6FOTiOJTQtk9Zac9PYSkKerJG9OSQrJWt7A1hA2b%2BE4Zmhd3KyZ98tlihShoMLSCat4yDxPaXxJbN2ZJ052SiIYFSNGT2IKlcDNcz3a8nMP%2Frh8EGOqUBfbz8x9Gb2C78zQPLn7Y9LOLIJBBXujRG1PEm%2F2rE4END7H9XUAlCK4f3sJkcdOnjK67Tsdt6qWw%2F3nQBZ9%2B9a%2F2nMiuAocYd5UPKte92J0XcLxyxc8uNVgVcGk9LNGRZUxS9qmoSo55DFOKA5vjl6YIE%2F0bmMuKd2Znra%2BR1ZtBRqoOkLyvIPC5Rc%2Bw9H2kogtwqtPxd7gCC9SrzAnRRw7HjrtjS&X-Amz-Signature=9a5614f14bd88c7575233a17443cabdf7c9b05baaa5db05c85455278e1588800&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBD3W4RS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHA2AMNGzgt5J6HNgjYpgdaKm49jUjCLh1tFk9Qkqd9CAiBweW31BSSMmoDmow2qD11QWqncD8DL1VapSBc3IqlMnyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigYO4Dshsb77B4zJKtwD7QxnlgbKfRuAWclGNgYJI5J1T36a8pUQOEpi6vhG9p1DcShB7yZWNE2bX6mjmBNRgD95NS1h%2F4YHcbGdSqJa%2FOMo%2B3pFHsTKQfA9323iBCv2oYSu9Wf4TpitOgbekHWZWjuDSic7M3BjR9dEtj%2FceamND6gIWEQupZsohrGYctz6MkXb7ACk8NnbFBlvF9Yh2z3hNJxSJhjK0cypXvG3GxTm48rEyyKofC17l%2Bpmqim8Cuj9CoqiOOLm%2FddDC2a6xMDavcD7wuSl8kET%2FKV%2F6VCLGcd9FNWufzLENSKNVzlIRzbcVAqjlo09U8jEEYwaQceyXjAEGXb65CXPx5eUpvkWsRiUXzI3u1rsVcGnpKk7WvvO7O5VUgfn8Vp%2FFnvOAsBkfcZSU%2Foy%2F6%2FfgZoEi7FzA%2FyogBobxeK%2BSWbaffZN1a5KkuZ3i%2FTInXJ3n6Io4NJJQXW3CtIJm4ApKdvtwL6jCNFJYB1DIJqDvX0eIZFO6jgx%2B1fuowERP9mNftaSMVU2Yl8ZHYrJ0Q4%2BcfcbC9l1mn0TVQlxZdqg1xxRZdnEmpEDG73y057HdMeFmgpNwdcKMuukEfc8%2Bk6VHHp63Jt4PEYPLeKT5NfaDjj%2BNpqWXVjJzORY47VvWtUwhOyHwQY6pgHqZA6CTB1MEGjzzYUkGja2JhjCnE8wGnotYnoIqVvcRGmlJnC8vXxRsyjESzqT%2FeqBgrFRyrewpy0%2BS17FJk2XlJrpeJLCYfDihUz98WkFap3ikA1EgyE9Nhy5Fp%2FHdCxS9hKN5B420uCVRArsmiTDPOfJEyLm02HCmD9tBZZEPQoTCIgKNMuVCNVYoh%2Fnu29TzaLyrK4A4kL97AHKxVKfwppC3jH8&X-Amz-Signature=6a8c606d087a71796fd72b549ac4edd30ec921d79d726cbbe52743669e5033dd&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL533HJY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA232O%2FSI6QGbqrOxOExUrEtcW1Mu0%2FuyjGJ7cZ02j4gAiEAw7E7MWKUVhnj%2FTQDvzrMv%2FVchyzsQoX6gHf%2BezvE3zAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODGnc7z7CRbhSTijSrcA2LFNmG1ahCeE7dzE5GhTEDvnVcNzVNrKwEDKcSKvoDT2f6M3e8XcRL%2B6E5VRIkhr5jCWihNhj2n2MAtk1wLUCMURBYZOEEaZF8YRoqQmYQvK4LDT3LqZqZ74I%2FJkkfYZKito%2BYu3KvVQwBV9w6o0YHB9y5JjJ9UhuSKzRgdNPs%2FgEms3iW%2BWcGEQY%2FuLSt%2BYMnLrhPbvpE3epWJiXoEpWc%2Fhy3tXKrA%2BG9PzDJMw5BsxJlHTIni5UVeXXDdGy9DFazEBt7gMVZuI3pRoul6Z1u4WDupYnvlUhvLhMXvEcMsHIJW9E%2FtMeAm0d5fYnFGNBnJkobXLQMGT7Vvkiy7Uh8i0EvSyWAfvBGIMZAsr20PRVnKS8lA%2BdaHjVrSDMm7apM5QsxeYOoAhmoDEznvrfWhjW8C1%2BjYIUM2jWJ4jCVaCFRya%2BuPv%2BQFUBT810Zrj9WDTmDt%2FxWPPRoeUzMdx8COqvqVXIEknkzNL7Xu7EFoWF8EHfoIxxdvk%2FN2GvQ4MHZi%2FbPGeo11tz2unZ16F%2FMsePxGhkgtKEDXbqsrrK3Ff7Pr7qihnZZB301jWgqi2a5QQBdRHbzWr6lqtkzfBc%2FpTENDKitbFbF4pni6RB1TwJFHkYcFiPKHrQV0MIjsh8EGOqUBcI4CKRHuqBk36e0ZLVjzcKFZpHuCRAjEZHYx19cVXjw4nLB%2BGfE7YQpt3nYPPlQirq0elcZcfbVvaPP%2F3DaIdF2svYUCEToSAEknjF42HhuC7laCwB%2FXVyNFmSI%2FAwuVMR8p0DskHXCBEZfM8PXDjDHUvaB6aW70gi42inJ%2BNB1PJosoidY8j86LhVKkpe9wfLY5yxBaoOxRBlgXku73fztWt0CW&X-Amz-Signature=66a09fea439dadfb6161d1cd4cfa8c2606dcb63944ac1d9d9e5a99233788c80d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKFEG3M%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD7Hy0fNke1yFGkTKOVmhWz3zJHY9nfQwGtTJwEYR0ImAIhANJJETzms%2FE7wUmSrvsZWUmOhpEDL1yrbZx9VXaeYyffKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDQVGwJjtRoGrGTsq3AM1u2bpWTQvgp6LpkFdUR0nUAY0C0TjF8xH18wtvVh%2FTirqVOG7BRJBPyD%2FQB5gURgmyJovVH4yGbc6pw8ef6j%2F9tCgZfft9c4CpJ5gZuJlNg8NrDxVAsWtqpj8ZThHRNfMZFc0YvW3%2Fo68pscmJRbJiGzVc9RcSf5WVwcu7u4IAqCjkUPG2L9Wj4npW9X5fgIuMPB%2BPG68689WXLjI6GxZgtd7Ai5t8YNy9A%2Fp8sFYeK7Pvm0YckzwuOZTj97RRTy1p8a9brory5VR7bKzt9novOj7vtjctZ53sqoP7U0FJm0tWWS7XoVroEjF%2BFSpqP90GIXr6UqBdBUMe1Exd1DgBrYrgZ4E7Czv5GnXkhARZR%2FW07XTNSftktIHvKxRi3NsRqh5a1eyAGviSrOc5nSu2ndQoJl%2BLJCREq9bU3kqsQ7Ai2bm87nicwIlLQzHjyT9JM9RtytOQb17aD%2BoDFAHNP2CsjHwnRXpGI%2FuZVZIlCgVRroJbDyZB9qIIwdxKvf2iUjNRpFZnShLULDN24uedocvhvcZyhpJWslz6TItdqAvbGl8nhF3KwQDa3kR3qdo5vp0k63uHalqX7O%2FWNImd0Qh9OC%2Bj8J1DVs%2BaSwEizSg7jSQzf3S7g02qjDNg4jBBjqkAbZ243pDqbUWOoDyY%2F%2FUz7oMci%2ByuxWbomthCtdfzi8nx5rTUXS%2BIMRbkh2IVLc7Wc6kn7mkPY3OQs%2BIOLSwov6cM53jxmfwtcjveQrvwrtiKhgEqZYNksRaTzriaT23%2FngT0Dlhqyd0b3jDsnl5Q9PTONZMGM%2BueyOtT8HhlkpI9IxRJm7cLeg9JrvxOza%2B9heeXzPDdyk%2F5grWVAmAzwvw9ttI&X-Amz-Signature=a64fc34938a1c3c0a4faa23909ae6f370e4bf9b4874fcbf03b4efca71162b276&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lifecycle management with Helm


명령줄에 매개변수를 추가하면 쉽게 해결할 수 있음. 하지만 왜 이런 일이 발생할까? 이 경우 Helm은 일부 관리 비밀번호에 액세스하지 않고는 모든 것을 업그레이드할 수 없음. 필요한 변경 권한을 얻기 위해서는 데이터베이스와 WordPress 웹사이트 자체에 대한 관리 권한이 필요. 또한 모든 롤백이 백업 복원 기능과 매우 유사하다는 점도 언급할 가치가 있음. 이 기능은 우리 애플리케이션에서 생성할 수 있는 파일이나 디렉토리 데이터를 다루지 않음. 대신 Helm은 Kubernetes 객체의 선언문 또는 매니페스트 파일을 백업하고 복원. 따라서 외부 데이터베이스와 같이 지속적인 볼륨이나 다른 형태의 지속적인 데이터를 사용하는 경우 롤백을 통해 해당 데이터도 복원할 수 없음.


따라서 차트를 업그레이드하기 전에 데이터베이스를 일관되게 백업하거나 데이터베이스를 롤백하거나 복원할 수 있는 옵션이 있지만, 이를 차트 훅이라고 하는 방법을 사용하여 수행할 수 있음.


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNM5CSHA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCtJx71vexl1TSC%2Bs9YyAsk5Q6H2uJU%2BKZuBA1KLGIyKAIgM0eQJF%2FWmMo7J1jH6rQQToxvCOtEjMyNhh2ki4MnYTQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8rDlrwyrmPZ%2FW7oSrcA2O5YltutbUvZU%2FG71jKum%2FXuLu1ze5SBW0kFqr6gPiXZPg5%2BupK1q%2BvYczvu%2BTxsl%2F%2FcH6fnQaXldVwx%2B9CW7TMG0r1L5Yovi4DdPdTSdpvgIqXquUoL0VUdMG0ihP6ZK7mbjXlzmW4wszqIIQQDSNyGWYALBfEVy2nvvbQKsJFDVN154vIBU2avnmNfzF%2B5bnD%2BbcIPNwkxQOLE%2B3Q3CNgenoOfYRmOyCM4sb5YWuOH7V%2BM1tCh4JVejraciqWawJCazQWS%2Bu%2FeTRg2s0jng8I9bHWkyAlC%2FTwCAeiTHe%2Fq4i%2FrgybOkENBwtQN1feyQ6c0OGBIUj9miZCubv1lcbOy1mfLdmtEqlFpCLgyReEcDHrzT5P9VezQFkHVEHqEoP3oBqDbTdDOuuAYJ5KKMYH3TJZ3PzA3YskXoKKcWZjgrcx0WAODyiSqQRMFjWcWQXXFNiDHleOmfgwlfX6VZgZNe9KZQDI%2BKjSM4h1GIroNtdvWXE9AbawwSMAfOiYkzB2A1YD55hJ62D4pZTCkwUflhE7JS3JCb5Ns6OeblDVRxvy2u155Oe%2Fak1jhXQ%2BuxwAKWjgNQDr6dGx%2BwYEvHLD7HdENznvyXO1ThzPMmmRYA1c38LIedKKHRSOMPGDiMEGOqUBx54dlmfqDcAunE8dzXhge2x0JhGjKLKaFyHAYPPmK77YILFCXlN%2BtLBM0Ixi0pbWu0WGCQKPQR7nyTa8wLHUYBlC%2BYwwoFLWWVM8t3sTDsjZ7Qtlgpfi%2B%2F6iuEMp3ht2H2HQf%2FRLk2TMTh%2FEhkMFRuy6o23WIF3Jc9tJOTc3c%2BIBJNkUWEiX1aAE%2BUesqPCCSvHMlGSq%2BYDAbJwqG%2B3c7kIVef0D&X-Amz-Signature=0e4ad8e2b9b07a43ebd2ad1ccc483ee7cf358f48120a4c6bfc1cb76d601d4be5&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUQPXGCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDB6Uxnc3LMKqVhOtpF5qeg8MiFJRzBfjFNoHMeft3ixQIgI%2FbHpvoaqYn1NjRaqhJI41cxB48h5cuIfDt9QwRPgCUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUzR0QHxl1eaiUYJyrcA2NJfb0aTifTLrrse%2BlRtHeJRhy92d6noosY93RLqGV4yv61YD4UuJ1lc4Opa1OJOO3PKPknMlgMhL8%2Bwbl3uEZdrlCiZgKIaSOPfwoXYe563Auua18qSKLnZ%2FRDx40L38irtU94wuC4lvWaGptFSHt8UPR5IM9VDr8SiUioHuhcJKps7zrZGlBjvpgty2oQY5soTIB%2Bz9d2%2BToKWKg4h05LFurlhydHCmpWhMWMagrtbnBb%2FRtQE8Jxui3KRbzBwFT683T9mw%2FJR3DDNGdH3%2BZ2Nv4K56bELN2jiGup1Gqp3ao9%2FL45n9nTcZnHVoA1pkRrB4L4zvD6P1Yi%2FN3uu7rwOU0I%2FReKPxzO943KyLXQ0GhxW3I8bZCsXRBvhU2kTyUf4K7Z1wpRIA66rzcf1ngnQJKkqWrEIP7PcEN97O5UL0OZkaL%2F%2FVgI%2BfwiYmulYefijujqtG8iYMCwIaWGo78oc%2Bv6u0Z96j7%2FzbA09VN%2BhrofBGOAUVOCkYht6BLNa8NP9kFYAr9ZdHpPsnXMtN6jIp6P%2F84AvqjjpCgM%2BFfHGPtxrnjK01w0yvEdFemVCCQ90tb1R3n%2BDR1WZN91MRJjQem7O7Lq84gurQAJXzTmOvkm7iV1eixlhk9oMIDsh8EGOqUBoSWE14XZOn%2B9X%2BYcTYzSOnL4gWOJWup2mwO1TC9LqNsRvomJyWBQNbOMg%2FV2kZUHPq2DJsZCubJdowXhi7vxnb9JiQpswh%2Bb125GKkxKRrBMRjQ%2FkQ92KUBtKoqWqcvnM%2BJGKBQ5TSRB1YqOvxD%2F%2FZrEqaKvF4XaHxCSQFukzJwk5Rrs4l1vui6FQa5O7wl0rAgEYYVOcsce0QLz5Nla7Vpx93tg&X-Amz-Signature=9dd87362b15acded4ec9adf2cdb84eb31e5fdbafb9c2acd37958f9c89239fbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

