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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6IKI2A%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIBSzIir4GQIKol4Gc%2FjpCinFCSzPrNaoZ5vW0fDQJP5YAiAxaQzbbeFmO7cevSytHKT67jyJzIiGazxTP12pfxud4CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNUNXGbd7xw6uq6wKtwD4tN4OEkv9BwmewQnKu1uduO0%2BuOujn2RyLw%2BmePwPWj4q846o7kzrCV8OQGs2FKIRExNqJW%2BMWHcYyyy1FJZCTz3aFNFEsr1LLJFpyXGytLHGrLcSjXzADtTdL7ZzCuxoevre5wrYvztqzkqPaE%2Fnk8svxmqD0CLP7v28svQx1p6xdsiNXX4UYFqFFPCRmCrcqvgwENHAEwkfILmRMNVUqFf3iTN5jIkXz6SqnabSq7TtM3KZ%2BC3C9ZuJf6fTLZFQRrOfvPRRWepKlp2Le1PYhK7SShw2KiMl2Q44Wg6sKAhum0ISBZwP5%2FdfHBVfcY8yYC27xGAl4rJZFZVcDResyU%2B2vDPqgCybGOXb2QGY5ePKJM1pieB2mZQAdfXjM8F%2BGVEqNGWOfs5%2BvhOO7BaT7bJSOkd4E68mKGOoBXfGLcHL7%2FNlTTikcU17REXb7jv%2Bk3xabEPOiKYE%2F6E%2FFJn5t9abNHZJRWmSw439R1O88fGRbUghDKnGLUDLCQY1ouF5twYK4b4OsqvLAyrzwDvHqTIRsTYqy3aeXEUEXOsORCr6dBlh4KddtMRQTAQPBqc73vTbd3LDAFombPiuokiBQs6BlALK4kocTJLgtZbNzHVy3FWkrWjMlHn%2FQswprXkvwY6pgEHs0zwmwbNsuolFUhyL8M6SmN%2B4Uu%2Fhz7sDUMIg7mZEVtax5FGk2kr1r6lJN%2BqCkOVoGQ%2Fbyhgg9b7zYPYUi3PB9L5U9OYU6N3vUEwgk5WQYQsUBuDRWiQjA2sU0Llz86c%2BI4LhbbrnR2S4BtkuAZ40UKYsehKYj5Er3xljs%2FlWgLP1LYD%2FpRaQM93giRJ%2BQuQIe16qfaGHSGX7n1tO07XC%2B50Dq8M&X-Amz-Signature=0a049022070968eb10b6594974ab44b33c050c407fed7a1b936bb9a1fa270063&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4I6LCR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCpgbaYMzcB1GdWZGQVDwq1smHdWtCRKW%2Bxx9nIEjQPzgIgLVeAzsf8OVHpfrzq0ZrT4r3F%2FpwbANrN%2FiVs6KDM4HgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNRuvRqFJmA3t1syrcA1vzayxN0P%2FJUBE6KdExEL0Fw0Yy73kV5WNhFMyf1yx2G155gAIIgp2hZEUfqwK5exHe5VrHYaLsnVRsLttvsSNOjsq95siPukHL0%2F2Wsjop0CIxh6qkjzRFULN5hscZxrUKae8QcCfA7Ij6n8J2nexwPQk4RyPRHlLRxz4902xdsAOalm8tXLBVdSgd%2FRJLeBAj%2BDHI5YTgMIODtCM6Cdn4Tiuu9%2Bzx3ElnxMxkhNA3YyidszeyE9eolUqJFm%2Foeit6owIgeTAxhrvH7c0UBs9F2vJ3hkEuDkf9X5fNRSmIocbChlFWcAYJEYAr5nouSiBRJ6pUmE4mAzA2ECmMYaVa3m%2BWcOkPzk1NaHBOfUsSnXmrJqmvFai%2FGSn3vT7GLXzYfEKhLkku1OgsXsh7hYkvENZc7rpr8rjNZGxjPbIdZ20OT21ZNc6Q7%2Fzuwy3xHZdmuu7MEP7q6VS73mjTkEAf5qlDYFVkkWnwRfes8ortEayiCzAbUDUhYiMLxU6zhb2BXV1UR%2Bd0RoTEE1R%2BJBrzZHqYD202qJG%2BWTMO7tSqRQWraZim3tnkVJ1c1xjoR8ugu94%2BWcwfpPcnRoCxN8MKyhMLw5aHiYBN1JYWzrpSAxageoCjdB%2FVgL6EMPq15L8GOqUBBIWa85Zh8vPtjhxFPHZrFsGLNDpd7JthOEeBqAmAj5AHmrf65KFdbUIjQEu1awRS30OwoToLuSHBEJasTVMn68E0CKVqt5ooRpXgLHdRFtW2ipu7Wcvztjrz2TjNHHasgnwlXoT%2Fsf%2F4T7coPmw1XS2El3bYcWamYs5zrFO4pvLjZaRDQCMqK3%2FFberTQPybCLlBlcaXGxz0j6hFm5qxwC8lXFOT&X-Amz-Signature=5ac2474e7c786c6084842063d2a68255e4c72e78f651541f3e22c70b8d641039&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OOIIASI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1vQN03uwjg8vfcmKgnzUdtgFfRS73ZIwe%2ByeGhLU4EgIgLbqyibY5b7VbA2P4EHosUu9Gmb47tcETRK5h6A%2FhcOIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOoek5KOzj5CYbdFSrcA%2FwQkfsdH7AtvyUlWWvuxeNJ6qdAIHIfBW2hmaM%2FOTFvJ1lgMbMFT7h4YqXdRdKUKr9Cic3%2BYc11%2BwcrvaJmwHkJkimRrN%2FTNsvmbRHpcM6C9z3uuYTHGrzZ3obQKAkLjz9Z38us0AOu%2Bljhfmpud%2BroZuUIuK2p0ENDy1TEH6TDyBSgFX7LR%2B7xsCnLsjV9%2FkMH%2FY%2F%2FiTA8X%2FgfqnLBzoufdCmqsOLIc2EHsWs8pgzllOzNP7Q94WkC5DtBPbhyOtEsmtgdGzXAEMgJ0KguKPuyOoMQBpwIajR1QBSGYYi6QVkvoqeLFQPjuy78OdyOdl3jqSoWNo0bMnsIkXCaFp6DZfKUCdW02sAhnpl9DFDbPvlxP10NK%2Blr%2FY21lyaChawONP1SOqxKlSJ1BsgmSd7Acb4GQVfqrJB9ycK3jD%2Bm0QG4z4ZNncGXfyJFZNnyxJZwpjhNvvZs7SmxuualW%2FjNF73CqNkt9zZCyDz%2BeMSKM0rr8jVoQLJM8A952P7xJDb%2B%2FRPtAmG3HTRRRdOT%2FS%2FWDMZ91GBWkpbZImAJJyBWmU9kNcYBLzHlJttKfQCDO6WiTP1oCH6%2BxpKdczuJheH3vq9%2BkXnSaeA3h2iF1INwb%2BK%2BCx9Zxnm%2BPeXzMKC15L8GOqUBleuvlO0lxSlQfv0w3BwQYi1FUtyMjUDpbQ48ACNp4yh4YmLet%2FCs85QVByJKO%2FtQvAlKecLZt2VjEl3P2pWUeQAouliwyFk%2Fw6a03dLcP8U6kUSq4c32zjTeKRZ0wb%2Bbac7qbJqqtkSdWwi2OjPSOrT195KK%2FOQoQYUn4XMnH4CPOWAiYkM02YfJWGrpCHBc5pEMfd0ROsdmMajnLT3aIXa%2FYDX0&X-Amz-Signature=f35c1363c8e10ee02412e3e4044075f6e2933d9bcd7ae80c5842dd77944c3017&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UOCKLK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDkULQ8cxdyrhVYAac2BR6CNQXUUpUGvMo%2Fx2%2BgEHgmCQIhAIVeFH8sGdkYCxELTMxVy%2FWDuMND75mcG4Hbfao8K6RGKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwHfFm3mHTzSs7sCIq3AOsb4Sa7lvewJM2TZBgGPN3PXvsYjeKdYVmoFTXhTXVMfq3KWBUN1KFH0armaFuR0Xd3dZumG81Cu5GSE9QTgNBnJWhgccjsnWU1wpaRZuwuv2prnjXXnN1ggx2fB4Vnij88YXBUXxZKNjj%2FTEr1Bs8a7uCps7OAyinfzpGM3FFH4ILt3PNC7sLDx7hViFojUS%2FoMV4NabuhAdica0G4D74jF7ZCG9Bx1MtrvD03J6zrlA1caa5HeJnrk5G9Ony4bvNAWKD72G7Xc3ClK1EAyI2f2TlAzd4B5nheG8QcUBEUzmvDYFbobz0azdMXvS0EPNwf0dQNK9M%2BSNnv5yNKdyxrCLfvyU%2B1rem5D3vgsC9ja%2BZ9491xqaIWWmijeAfz06qAYakUBRSWGasWvSufDPn3YfL62vbNa9C8ckUBW3Pt5j9ot4IBa6r1uEd%2Bt1%2FD9UIM47mNSA0ukW44A6zDpFj9V6uR%2FAVrfmbHWvcGZnLdHxoK%2FamIDU87ehqkrQzYEALwrCrwom%2Bwj6KsHA431eU4ZRcvWqG5uFDXWQiLDbR0Uh5kppZGTMVjmJoyGEmNObdsUm5eKYFwYXnRF0MD%2FRIDmt08Tov1MZoLsjbEGVGAb4d%2BBubOUevbpJ26TCvteS%2FBjqkASO272yjjreGP8MCleq5GxUYT%2Bgix%2Bue1imO1brKBUFJGYxhc0qwVvIABQ47%2FeUhgnAGOpda5gPSbtkBZROgORTXbe8SccsxJzNIB5z2uzESxBkXiAljsDx%2BkSHGST85ppSv1tFLeaPUO%2FJMxp3Jzkso%2FSxpVT4bPZeSXnIrz1L013N93XJGAuHVcvDoebanHZ9u2uiRzxJcK1hxrqds9xiE0SYc&X-Amz-Signature=eba72f2e1dfdc4a16fb744886a4f748315c02b30569f009ac50afac3de19a4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYEAX7VG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDd09DuSTrfM0tIMLTbiRCSVuWX3mSdUiM1EYUUwmHaTwIhANqe3vqXmHi8W50eGgaGH0lBQRInCNqGrMHBiAchwRa8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQyYUpfVFReEbfpo0q3ANwqcTTt2qWah7nKfSPjtJUTt%2BACaWBgAk%2B7UoDMOznLuuqEozqk5Hb%2BnmbYQ7Bsh%2FYmppqo%2Bf9w1RX8ZTQ%2F626ldy05QefC3kzjAXOogFPXKK%2FFwB7VtkaJngDfVXZ7BfjLJKuj6Z5lTxYNKNV0J6ucM5shxbh8XAzXMrqsXM0QVc83WVH4PQCL4BPhbJcwPs2aWwigiaegnj7WDFwG3GEZUnzD9AVY0mWJLmwAow055elLuGNVTRdeAVl9%2FF4AQ99d%2FXn%2FCfoeGhZ3CJH1Dp9MSXhAFqdSG4ysIGU%2B8PoagQz5AFA%2BYAnZZ3sVnScR2iTpH%2FWgSG8v%2B3teZ9TjjXqkvoOKXb%2BNFmZW4%2FYPudBb2ZUehFJwL3msAXnGl8L4XCrItav0TLaUGP17ly2ARN48OApT9hNLtfGy%2Fuj7z5EmIr247xFQgeEjR0HY6tSxIgx5B16yKYnbP2SBkSTmhewK5XFd22P9umWzI5GrCP%2Fxts7ni7w%2Fo7Gk%2FGFTUNTkdN60ioRh0pY6TVjYwbMCtm%2B6ScBsHQOxmQEL3kx6MzdpG6sgyokGSxLhgiIU8sS9mTDuifba5b61U1eQMAs48D2OjSLMokZnJUKwmCWP%2BGaeCHimRyHciLkanWF9zCotuS%2FBjqkAdC4lSCufgUclzBcyuQ2AQZeEthTGMY3Kzzz6D%2BpH3v1%2B9wlIljBPlXHwT6vfV%2F5%2FLdlmkSdcQ1oILXql5JwEBcI3V1hfwM6p5qwqbOCAXEljd6C72i%2BymWmr8rRmGumyiFHl%2FisgjHwjXxIybrCTm9gmLPqsTIIYJi3crTLhtfxhaiDVR8hAsQtxUymJ9UYtC0wALQ16p9cFwDqF74BsW6Wv7w6&X-Amz-Signature=b8945b65b733021db4595d4b2422167d3b10f6c1460fd02deb2b48af571b654e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJVJVJD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICMl4g8ye%2FNe22z1AksNPHYZD3bHVunZpfV3NK3B6lIEAiAK95IU0AXKziH8Akn2iCxE0WNF7iyR4AQEa%2FxyTrnN6iqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWVA9xANxgIVqnZu1KtwDPVHkOzC983ZnJ1TijqOpGJ8t5C6OsMnc9H0D6I9nOoPWLnvJrcIKhdNJD6I0Tp7ccMh80ZkckWsQKGMzvKsDvb%2FEolZNwrmjd8LNmlr0lNW0CW84SHBIoP4rftx3pkm9YnporIEDx5BrnlEBJQsxj5Y1Ffhp4ho4q%2BH7Bux8ywi6vexluviHkA44mOK9BZcNY4O79018ikE55wMKoMIrX0ytb1TdvfnYWXGOZi4Dlu%2BNyhaZmxkhcic742EaY9d3MP0ap58X4QQjsvnG4Ienov8nXORqNXlhtmyTUxZQje1vRUc%2Ffj3RiBIk3B%2F%2BTIQzzODmEOziFewl7zIQY750D29fDKyywAIraR6ivFNYVTA7%2Bos5Z2rcqXJdqcFJZEdIcu78BH%2BH80QMBOG58RMdbUrMwwjJ23TUEIIebQ0pDZ1QtOG4e0ehmhbpXQ4EF7dhxt1R1unsOMy1MOAVzmnByjPfRHAUSHHrDJYdpGXpUxBS95vQUa9RmZxBZ4gK1yFDe9gKD3QfR057xLwwi3muEYJU6sep1n5qkfJL4ebRvv4%2FdNdjJwPyjDw3bgE55%2BWnwTSSo%2B70yNBlWHV6jXaFMSBRJ7DmR5bsJQKK%2FtcXHbRLoetibPz%2BK02afgYwt7bkvwY6pgFrQysQVp0GATumlnKz1Om3BTpiqRWfPCcnQzahuhGRQfm6GawiAmVAetsIdJFUA1GpWo28wUITampdUVmIg4IwTFsiTao%2BRlWxmAIKfmv6%2BdAtWtM2PBG8b5rjTLHUXgtaDbvG5pWV63kUmyoEqzxh129pCTrpzdiwW36f8P1cDH4oc%2BcgIEEmMrY6igNSNSdWJJiSlLZfv0NpWEpd6Mo6RO97qJkF&X-Amz-Signature=7b7b82991f958e19880dbddcf6318e5806a3f8a2d300bbb1cdc9bdb559f4a970&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNDN64S%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDSeVV3B%2FNXYd3P6WVsNLLI2k1E7EkUpsXYWUkZi%2Fs3%2BgIhAK2MKv8nfA4WFPqy7Z79HdbL1aTrNrTcbndNjyCYmhH7KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxewje6cNIeksXaJrsq3AOPkaeB9JJ9l%2BH%2FafEU%2BLQHeNszIfR351BYgQe9RSiEsDfoMKGN41AIEyN2W6DAQEVRftC%2BgVxtv6xlFjgCU%2F2%2FnebheIn4hBfyLetHu68RMiuWN7peH5ufTBS9OWOUUF70EoN5RnZdiG%2Fqt04La6yxuaeAUMdBx%2FmSSAzHqhzdMaZzN7yeyPvM9UNXIipR5G7fCgKq2BFhzdcHfP5bmSJ8lJlCcUOUhrJSnn7AXdro41dzwLTqaYRZJv%2BSbBuXefdntI0q9mVKeVw%2Fhlr2YE9k4IBhtHfP6wbMLLAdPmRA4geigrFEVENZn61aVmdWr0zKwGCwoR2dkSmLD9c84yjESDiCA5tB69TH7t24qRTOvOdgNKzuXcSOpx3apCk66IdjbanzzD9SxkDowV4xzZnBMQkvsKMSz4r57MEGJjevZMzHL8WB97I8Ago5%2F9d5V8TSovyhD7Vs9lU7DisPkggcch8CBXfbq70gZ55lTlA%2FcaOyPzZyeq4nqgPEg4HBXkNGYAaoLonnsONoLjJfNPFpAyHAfVEbXaB6HfCFWxlfG7IFs8bmpeNtLR9NFTJELfkQYcRI0IR5inKXrmgegVkvB%2BlqQxpUmE7zQGm45or%2F9d5ldAOzvwiECZ7J1TCttuS%2FBjqkAQOXiILh3PJrRR3SSpV4ddxNolH5Yqua4zzODLRxrr7UdYqw5iisLZcvqXn9BtwGYRUsLDMyE0llJfCdR%2FBhqSyE%2F60czE%2Fh3XntC%2BMuzZ%2FMHkx964pf0DFUhPydQqeRNYCcFtz6siI3Yky8sQZnNM0Ys83CO8Brlm7csGEI%2Byc2lEapQnLgU6j2PXi1K60YZdpHrTjR2k5s1C3CyJTKQQUBn4AF&X-Amz-Signature=590ca4f51fe7115c2b20beb90c7276192c35ec34643e779c867263a482dc49ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PQXRPJY%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCEh%2FqfF7qIq%2BLb2%2FV1tnBgk5E%2FTxRbzcf1%2Few%2Flz6wxQIhAOPsOn7ePAonwabam5p3pkArSWnoH7zlmJ0J8bE4aHDwKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyknf%2B9DdtSHMr9OuQq3ANNeZc29V5MytT7llsWD%2BZQhE%2BzWNm0wH3nT5T0gG0DWNnlpEDl6LFjlu4GRHwyEU7wrk7v5aCMoEy8iPtdoSECxBO0jWHosEPDfeuSbnT9lIPMJGjHRffLVqj%2FNVxYb4eGjDrHIYGecdVIvJNzzU7yr9M5w0VZwd65E8DzxeErFmUQNycgZJU5wVhQbVcQUhkjjN1uqc%2F8%2FVp8oNwkkXarpKsTTga%2FCs0ZG0yJwzGBb3CfkyAUDE%2BztMBy4YXrHqG9gbJ1J5uh4ql81EHKrJzlYhvfEiIyeP7dwzjrq0aLo4w%2Fr8yPt50KtT%2BCxxlcsPx20V84RvtyudnjgSB5GW4IrGoAwAXZ0E0LeA0CSONH7kxqp7q%2Fe%2F6KRwld5zkAia2UAMnaxWfM2MSHeXyUUnxWcMRJgQWIRqXeDhDcDMSo%2F36smlLLcnRTJ%2BHiw7A1CIZ3cc2Sn%2F317%2FbQaaSpoELjYYCF5VyQ8wXP4BGe3pJeMBLHW%2BJBA4bnrk7Pkr%2BK%2FBnD0Ofi9GUT82TccUr7CJEj1cdLOyn4OpOerKJSkzRtKTQDzq1JUwjsOakvOpTPn9vZCCgK54dxSFqdSzfK0Zytbyh5ePYV8aUjnIaHeABcoPXmD3%2FNSkBtLQrJjjDQteS%2FBjqkAdPL8Ds8EgbiK6MSNJYGs0l%2Ffendutrs%2B2dlFth%2B9XJsaeHWEeXibR4D9hmmYsm52GXevEl%2BiBRej5oUoH%2FqtKlSt3AfHqsQhMsZKly5U6X3ahYVME9CILJKSNX9Gg0N53wYXMQ4UxM66v4p6RHoClePcmcWKBmmZXJGa3oEmHSDXcEOL0GOPL%2BacAGirtiTATbqwFar1L8fphm%2F%2BpnOKV6bGYdg&X-Amz-Signature=712aa36a35536e65a8e12c7619f905c195227276144ea52875801396e8cc5bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRKH2DH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGTZtdirzQILGIRtccUzct0z8TVOxpCagI9yC1O8%2Fml1AiEAqPXwVxQ7HTcXlaNInSmSVFP0Y3jz0Nbh6sRt9%2BSRbFwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl2vl8ASqtcp%2FnBYyrcA7S4FfpDzVNnD8UKWFNhyvylzAhhT1iID%2FzE2UlFRBMu5%2FDD9Qd8yC6RX3n0ROFKIB80lOCMF%2B9H4UD%2B5t0AJRA7AuTEqZEk3UKRGTKRuSHQiM4vA5p0Pvhkx8fpDGXIaKDOWOTGPAKMHn7bgKDjJ26093trddQIk1inB8FixTGWrv%2BIEBEZxI5s5EEa%2F%2FRPChBpg73EKzB3gD%2BiI1AoS%2BSi0J%2BGHt2ti3rURrtzklEb70gEJIR1pwCs%2Br7V0UdPd646bB8AaNARnqy8uu9IVxUrA5wDueqZmTtWclLuasnNcDM9ul1M3e1izfjqqSMsMQhZo5u1xj1eMtLamf0MSSynMah2EW%2BrvSQMILxCAJ6ZCIbrPM%2Fcc3XrQryTpjqi4tFSFTqok0jbfDKcJQNAUwVwxdz0xKJFFpfq%2FQrGSXIr3GdYa515zYrwL57nSWk5LP2A%2FY8Aqna%2FFPoRUjkxn5UhYRW2MMPVx1mXYVPgKhkZaDmO21OfA4vo%2Bl5w1Xu6IzTNuL4qmcUXeaduGDJrmw5Xr4%2B0a66Zm0B%2FCRHVV3KyJE7noWEq7pPtnrfVQdskvKPyYCnJkntzDPhCi2kKKPcuQctwkR0CCrwgN4fdc%2BXmyTcO10SBWEfLG%2FqfMK%2B15L8GOqUB4JRBjnbl0x%2F%2BNbKmkjjEdwrOufvMlHEk4T0sBpJ4t37QOcK7DogQOO9MOjDXx8AjG0YRuyZdPakg77nOF57UdVszr6zWzYEHF438WE2ydlJdr9zPdLdzmoXgrV2boLx7rm%2FUIV1KKzKdtGT0lSY%2FSoC%2Bel87OvteLH4uAjFhj%2BedZ%2FXS8SN%2BQW1RFZ%2Fr69aGshybrEr302iJh8cTGdXyBPJ97pBP&X-Amz-Signature=eb000029b69dbba1f8854e55329e4579fd4e45066839910221b6c06d7620732c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

