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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EF7W2N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe67%2FHO4ScUQI0GdDBWFNCgMpJX10VJMXKEcB93v4P4QIhAL2BjoTpOYjxMP8DHsk516KS6mtkyRpZ6lecB242gbRvKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPNfltk5%2FhNU2L5ywq3AP1s%2F6L4VwUe8TlgPmzy8WyuuGVfov74Bxkasjqg5D8EYccKK53bWqzpqPS7hzzIEIN4lfDk%2B3xcaiNlTviRi65IZVFH1pYoyjoKudrOSgUwz7OkATN09erUeHixboNatDMXETiCS5B1FUYxYPWUU4I1VejWwY%2FA6FX9pBcpl%2BtiP2yOwsDzy8A%2BpKl93xJbibwmQL45CbuqZ5emyAddvvQmLkmxOLoK2pO5%2FcLLR2P0417FOO4sGX5BhA8BMEBrf9jhu6G0bSWRW0mcmhlr8nKKVrAH3EVqSgcGkdSVkbyzp8SmuCv%2B%2B8lrNv9UXQMdyWkdNiJZvc1Q6%2B3jjcb4uWNbsPnEQJ6cXR9WBw17i2qkF6GA%2FilLYVL4tuCqs0YZf3C6o%2FK9gqUWbb5is6lW0%2FGl%2FFlGVKg84akwYS6hkrcCbRhi2JFMU%2Ftec1T0Yme%2Fr%2F0Rou%2Fhske%2BP0gX8PISsvgp87vmA4kCotU9IIL5SdtuBhJw8H1bei01uQMwiQCa%2BZnciLf7ElXl39FgW6vgdgRX%2BnDJvjuNPjVLrwNRP%2BF%2FpnOoTAH%2Fd6LzIMPXM8CVCjl7kmjJbh8LCUuqso02sOzFaCSxlYT%2F3BB%2BJaJLSCBLrn9ScY0A41REgDUtjCUmLq%2FBjqkAWIkqKhB46XX9JRMTvDzQdB%2B4rcc%2FGIKUcrxP3XATehAVxMkVOfH3l7nLX%2FVl6rh90U%2FH%2Br3guJ%2FPNQDWJdJjFRJRV2y4JcBfT%2F1JFKYbE0Qo51DcOhVf5J6xW0fBtTWzbW2h9vW2yA27Q1wDEO0PT4AxHi%2FEeFpozXqXkVad3t8KFFPkHZgDl%2F%2BHJWu79Kwn5OGmXdSNydZBz%2FqyjDR99eKeHIs&X-Amz-Signature=56220b9e4090cb64bd09daa5d006d16b06ad89bcdbd12c364684dff44f126c80&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMOHE5H%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Bp8bPm3CE%2FVUNCHm0ZjcH1qTjgeEVa2TXbNMUB%2Bx0QIhAPRP5M0KjXE4vNhMbOegKH4PkCFftWUDeaWHjEP7RAd2KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ8m7CHnLVPQZNMwgq3AO3s3ceqCjukpLVmgjdOA6HXk2hrhp7aADFjrBLtPZW9Qi8Eubd7Af%2FdwyWLLL49fzP71QHHRiDB0nz9QV3RMa7hHZgIqFMEBoYmlEF8SFxtqyJPVb6rb7erSjTpSaEHsSRXJMzOyoMdVazLSh2%2B2TPUtiQfzWIZiKw9y5aU%2FDpKJmnaTdZddSslZQc3E7sRukmfYeWn8SaHhRxEdJoWc0yIkj4%2F9frcVHiQDDh1Od%2BzTOtZhX7RTu9iQmN7fH0K%2Bj%2Fj1mpGcRQax%2BSz6xOaqTTLDMaDEc8oaD6vVLpuBxMyxW9fc2PfyGrSc7CnhVBgm3hpGtSZM2OaxlSic8Ex94DNqxdRk9SsmQf1uPQkkmaS7fXKZNfnoLVCNbQK5NEI5TjFtk6uBRlmzyc14XlSkHbn5Jb3rGMEntWKqv%2FCeFxpXZhYVP5X9nMgSRm6%2BQ%2B8TmocCEXrHsXdEd6RyVPw2q6YmWi1wKcOYEnr%2FpK4u9due4EQxEafLL6XUq9IqFU6jV3sCv4nQQE8zogXSZqbks5fV5jitCaOYuPzrfRqUdsg48hqZPKmITg%2B5oIrvcJp3xLwKnOA%2FlFTF0NWH5c6E2kglxZxyJ9DjwepADtyxWQkiOAKD0O%2F8BuAlodxjCPmLq%2FBjqkAeY3aLumas53P1VESqFYPvhG9l8MD9mEK5CD7iluFYI53Uci8Z1X8kctar1wAh1%2Fn9NEkAymCHMixzYmRNAQoKliAyI6ZIaAQClDPEdJ8wxeSeZJLLbh5cSZ8vonoD6S39cJ8aiK%2Bihu8VBk3dhvb7m%2Bw0t41114r2w91mGeJGKR9lchfy4149cU9fnKA%2Fv%2B6NNkaZT2mv7Z4zxNXp4C3h5tSsot&X-Amz-Signature=cfa81c94282b0609c3fba477ac9e561760bea947602698d67f6e03d30e7907da&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ3W4A5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIQXHMgNstfykqB8JU%2BUt1UKM4FvclFB%2BBmKOd6HJMPAiBNmSrJRseeeZoYEI6mr8RFl%2FtWDV%2B0eskw3UlE85dTriqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4vGH%2BduhVkkTDtBKtwDCj9hylx8Lgh29boTFwVllDoQ2Cq3%2F22xEh%2BKa2pPclLI8kS8ZTez1AnWru658eaHgIv0UqEeJF8bLWB3JUHAqlI1Kx9SBqN5dsyeuNRxlZ7GozHJRQxT2bKQqgp3H7vdtvNxv8B04Spfvn2yYmy2UgjGIL30Bu5ocpElgBCwzMnK3THYyQFfkocyx5Y2YBFTkPxB9NTLdNrBC9cH%2BqUFLQmv3I4%2B9j2Kt9mTx%2BKYisTrh8UhChvYLQWNUYUiXOpa9QLoldz%2FqcpkC2FEo8lmwKG6t8XQnRbHvELTvQViNRW1si2RbRpztwGgs6qtYEKn1y0ooTn3rbvJei%2B8pEDofq4cJ%2BV8koUbLa8SRKHg5ZcFuxWfEhu9tM0Dm2GEQQNKDtu0pBeL57KEARiqQfScWjdfvUwwvCv62WWBoOBWfaWlcZ68S26esRLBiKF81zorVjrjFatUKCRPTy%2Bk3xTQVLA9YKhYazLR%2F4NNvjR4s25NgoReQ8rOGBqUUPP3M1balap86h5c%2FfVhytonHuPiLjozzCMm%2FHGOKCacsWgNMi3f%2BYZr4vZw1%2BXSpxh5hfXrkobx0nHHdMiQLhStK2K9pDP7qtXmQo1Hsd8S4rp6fWbQ4%2B2jr%2BmOkBDU8T4w85a6vwY6pgFTbWul6U8aB68RryIP3EGeHZW%2BgC%2BKDm1%2FSA3%2BQeZZflRNU7zN454wvbQIwugy74vp96k%2FE7L%2BtpOjtZy27%2B7aLZFkKVHu8ldMs%2BrlBfuS3owFIJmUxr0EgTIQKR36FSjvVminkmfqtdWbMN7UIS867mUQ4lThA2krIWUrWbuRK1dMFyPrNgrc3v0XEoo2YJaYcYRDXXsKbbpOihWVpxC%2BJHR3K%2F7O&X-Amz-Signature=b5c7183d1dde671b056bc73bf6d3bea0f376ac7fa3d108b26184e74c1b2e7104&X-Amz-SignedHeaders=host&x-id=GetObject)


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


## Helm charts


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2OLTY4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzTfK3ihwoT6SbwsOaImxlYRo33FkO8Nb%2BymSmXyTyiAIgKk13xn7aLi5SYvIGyy4DLk4wNJAhdFt1PxtDdbINB8YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5PqsVDhZsu74EL3yrcA%2B68XuNLZWNgTQqAPSD%2B9CbTfqjoPX5n3f%2FVH8D1USa31VebbITzbGe7FjFm31sRxgCNqC%2Be7DdKGDIxw61EcVkSP%2FLztfOLZ3Pjazwt9Fkf%2B2%2BAlTKaTOXTBXi6XLK4vUyepBBoOP0Nn28amk7d8eheOp4n9iD8sJ2DW%2FZ%2B046Zo0Pdp2S8Parbk6Jk8imnzrVDUCc2cACJbIhgjjIU1GRdrkGKpmhM2pA%2FSXlKme0gkcdiCacwAyO6r3hgmfeJJdB4WQtjMCezddfA%2FGa0XxpG5mOUTstJqRlrUfCl1btSm55k3R51e0l4aZf3AdtnSow89fvPu1AgNlH4woe4ZNeqOXoUyKSUXAdjIwB8rAj6M60zaxoYeELYEUzr6a6uYCs32vn%2F4rPBHBJvc8ymUEeJhiXRXAXDVE5n0pbIWCBefjiDfO0vYpFGq6RNg3Wbgeq3vC2Is8Y8bExA26%2BjVLv%2Fn2%2BM3LSmJ17JJRbqQPPOE442XpZ%2FwredAguPEKv4idCttfF3YwscWXXmoJxwegSvR8Df4PU5r%2Frt9HB1522F30mIaof%2F%2B5BKb%2BHLKCIRSV3ok0e7K%2FmrpM1m8pLjra0Mh2TdMGYlNYLaJP318taY7Jpoujna9vYjsWGFMKCYur8GOqUBRJNzG9WDAIUok9GKdWTXPg9BNsxaI%2F%2B%2FwSUfMi78bT1OCEUuLomx8RIb8zv%2Fg09IvWw9RX2p6wku%2B%2FCUxZ%2FLItJ9iBAKAbieq%2Fand7rumWlLN1tvw1yWThns5E5PJiYVnP8%2BMpstdSPQm9WL3UigtSZDr4f6uJTYAS4IQ6jgkUTMzuy4kKqYCzYno2U1zFKtyPY6B0LstXg3GDYPJa1ZSqqIpdRi&X-Amz-Signature=37a0b1d2789e2271dba7f3cc929867d419cf93cbcf197fdedff61ff40cd78624&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674G4ZS63%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOHKpxmAbuIRBlqWCWkhupQp%2Fhz5EIiSuOUYaZIZPEOAiEAvF4nzaA80IYBy2ex7dLMkvyGWSBrCaGkQsGKZucO2aAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrG05s3Ij4gNMldOircA5q53abdN%2BjwdsTbmp7wJMrqIQFUR1ZRKjoU7vAt53k%2FI5iA2IWPAxeV6OIYiptK8HH%2BEspFQzftTJJLJsHv4FaLxz5lSQGPkD2v0pj%2FGswXf6mQCcmV1tDsNp4sbt20QFHk1Aifu96pib33Y3CLvLb3S8yY65M6i6%2Fq9%2Bzc9SdwOXol4tsBAgRnVZFVJUMqslHAW9IM9CTHG9nOxBXe5mPG%2BwEqbZjFU3Prxjq4cK6hOKx9hzdQdL9mFD1etrhHqhyzAY%2BhzaZBRo6ya3sE15PFjebucv%2Fy%2BxUxeqoRLANwr%2FMX7QiV8nKGurw%2FCGWP%2FpfCOpQ0Qw4J%2FCVIVByjyACgnXrOCQNnrWQD2BKZWOu9XlIGW6r%2F2fYaykPb2FbfpMGv6UJ8cvxHjw4RGUkgqFqC9Edt3w645jf%2Ba2PdNdUvj9n2j0ldK0VUaSF8I3G%2BtiFZ1R3kQcsdiCU1hu8Khw2aIcFAhwV1MbYNTBmzDSAORYM%2BXeTsaAlAAvDiGQmcBUd%2BWuwbirBRI4rGRweFo4%2Fm1WDyrRDcy9oKY0GkP65Qu5Yi1B5%2FI6e8rjM%2BMoiSiwpeUAMWd2uCDjgf4dsPpLDWYijY4i6T%2BmT2cT%2B4Df2kjJVWwXqbA3DGHFrHMLeYur8GOqUBBKo%2F2lvxgId3gUqpssE6kPJJEksNcaZCzHNqGDL9IqNCTQ%2B2ZePoRb83YWp3f9PfYJWbi0pZ3%2FDI%2FE86yD%2FZgDA2PeilehJlFykTSckBwndVtIgOeBLzDvkftw1b3WSZ9azL6KQz6PxUz1Y5gg%2BYKCKMhAUSliPHSiIHUtszaxAxznuJ%2FATbz4VzuUwTaBjTLK9bBEZ%2FJYDZcRoAVvpiwqXF4Xfv&X-Amz-Signature=ef62e50927935afbf51d1f69e140d9c1398a8103a38f7790343a983d4d588224&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYAL5CU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3%2Fry2jVYL11%2FeqaBOf%2Fna6tP9pC8cMz%2FhD44tC%2FnY0QIgdcRnBZiyW0KQ%2B%2B6xI1zfA0nYhYnemP9hMuVWI9IWpk0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmMQlhsBwGUA3Z3RCrcA2rKBxbw4awXn2CB8G%2FEy%2FjFs35NfvdwC9k04S5xIaKiBc4%2FIwjtO2%2BiBX3fgv6pxx5v5ZnRQbfiaWdY38d0Jcatnmpc3hEdtKSGU36CThOKxSSvNsvNqlZ7GDrQy%2FW100s6LYFHmEipBfKbp72HeKnfX7%2BVE7iesmhPf%2Br3fNQ1SD43KS8bRL%2FhX7bdAj826YXn3H7xR4CiK1EOP0XSwrL%2BQxu8Hzt7VHYwo%2FtwBui281qRLNOY86wwKx%2BxEBtQN%2BKcefptDaCsEE8ljmip6e6na6ceXAmeMU1muj6cMfOhZ1En4cMD8aT4bHRvSZ%2BgEzw6%2BVPCT01jLhDn0h%2BN7r%2FoHIGS2QdasJLkzsd3f0Tv7nwG20cYr2vJNT4wJIj3EP%2Blqe9zxOPCA4HFIbI%2F7dBJzTGiMvedbJjQgfabGS9HCUMbuFvH7rDr5t7a8fE5dvu1rtyCUdBVIB9N8XuJ7cbA3sMchnjpq3IqLZff%2FAJ1u49WlVPYFQZdPdXSBcR1oE3JHuiUpaBUGKbCv7xLe%2Fx1OGU035iXrGE0zXYPo89UGwPcVPSOIsfIsEr2dgueFDw6D9zNDPXqGAkFiW4sn6BufF2sBAqLir0OLz04eCnW7ndicbPNFFu1ODlyMLeYur8GOqUBUOXMp0IvqtxY6elfA2gqbh2c7GsNoku1KzGNsSqDFtcxFbKQ4Vr%2FI8B2JmBU97vnB%2BGunQNeWGEgVrzVFR0ARlQFF5DDuEHN5ZQ7OH0AQHvAbDI7aAn5kvklEL%2F4088cC7L0a%2FPTqKvyPUvIPCm5RVPzrbkswDG5dR2uWopTTM9hf5hffuAXKcJC7fI9MxV7%2BqYdfSUgvfohaqyrh1LW%2B6YeZ60n&X-Amz-Signature=eed150640a17e64b20c61437ee5dba8ab809d94bac7691771ad752d66c9d198d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7W3MRVY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDnsLWren0i%2B2qCncfukS0r5KvtIMIWnlE5%2FR0TnEUFAiEA3Gyo4jcPrbxP6Ii1%2FuLnuMqNEmLudjqgtd8F6RsAGDAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKq%2FPJhG6MtXflmCSrcA5wa9fY0ciaNXJ%2FbFnj6cBb35Jxl3VEgDg5Jo9U39pfhB%2BUboxnMLPv631tli5lZSNH9Xt7oTBq3sX4zayQsyZodVGVxnuEKYlqnCihIoyoTDyUb2KxPpCNclYZJYeqMegXwlv31SiEeDOQ32Y1IdXpaswOi4HjCFAIK2K8mWIdTOBy2UkDwmVXkwFUrlDjxQABUgPcJRWQOayu1mbor8VKXJShukP4axbecikjMqbBlTuhiCpdls32pNoPsvnXRCIBW31n6WxW7yVBNvu9eXeplfbEDNUTmY6LaXs%2FYoOJeNkQ62UB197%2F3yIKWgu9MLJoRLX3aiN2K9221YFdTc0jPakoJfDjB1pGxKa2CoOne1lgomtar02vT9itrNPZo%2Bpyp9RqlyRl%2Bs5BWkrnqaYjX%2Fx9V%2F9lE1eeXU6FuFvWd13suAzwTjoVRMD1zPSvoadpAqkB7DUJIo1%2B9%2F5JXp34DuF%2BxC%2BSaofa7s2oyNR3UG2QurPnB9TM2Kt%2FMpBvzLTyPbzV%2F6HgguInHiyGPmv4WnHZO56Dh9gq5tK5w6MoUkvsU4ha5PBv5WtZ%2F%2B5VGpK6jXXtAsA1zlETqMzWVoP04bMFE6q8IFG2LYV0uf0uXur1Q4pdu0A3tJkjAMJOYur8GOqUBawpl43m4JZunPfihC0Nkg%2Fl2gCh3OCwW6aaPLmzUxwfuFUi%2FweVeJF9djK%2BEfOT8UJqtAX%2F6evDFcchbS3E5LvMT68akVM2EnMBCIPPyLRwa8QJ9fm2cJbxhbs8FKfaEQiuTJ7trYfSXVoLRqgLjmlGlfZQ6MBjU7t8tZ%2BywORojq07UdacZHbKcbIpnh%2F9C7bBDtBoc8OTGqWw9NULi%2BJ868iVV&X-Amz-Signature=794249f4d4c6f080649c72a5660320f452f2216a02d3a2c4ad15778bacadecc4&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lifecycle management with Helm


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXORRKA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BrVb0AQUr9L67lVX%2B0hMp8xu9qt3QJJUDT366sUuZkgIhAODahw%2BZt8DE%2Fj6GycBf%2BkNmoWAioTgHWJ8y%2BH5AiDoWKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdRhya6d2aRS06TGYq3AOJ7m8ua9AqVoCekjiuMOZTg1NWlnz66CohIO2pBaugf%2FXn45tp7dpP05A4xpV2zhtZWHCGiDM4l3u3qh52YjMo07zz%2BiVRHgGXKFEzNbTyecHj6m%2Brg21iLMLsUBRGW%2B33p%2FhOwy2qfmKfHxMtPQDoVF1yf3p0yjvpr%2BpxXma7O83ECrFrwrDyWX2je4SN3peaWNJuYcePEjl%2FJnQJND0OFCtV7lILiatJ6ZUI1G%2FW7n6QZSLu58aAbmMpLrlCJmZUetuGGvUsa9LgRB%2FyYtU7V59DPYa7hZ3l7qzpK%2FOmnVBl5d9lZUU6aMPzQG0594Hd9sIHhVn4ZoISJClgwKyMMm6jbvyB68i8GYIGDGtaVa6oGcGt70sUO3M04xbTzwAWcoFTHQXZ98u4zOhQrdifSA%2Bu8quj6HpHlLFv9nCRyRTCG6PEXk0rej9rdjn0wdEvlMWxZAiGxdLKiySvTDUyH%2BzmHnFDsT81bMBrK%2BHjlLj5HZqEhlRt%2BrGF6VdNdnoEvX5i3VjPLoPPnUsAxIWpCGZjKhQrvu6wEH2%2FxgNBD2xPz1Snm6DHyJJWKfucrBGOsVlUD7P9rQUdXQPzIRfkfqYczTz8iaJRqcqq5Gr%2BsUaVKxlWRjZJtUUGDDDzlrq%2FBjqkAcaD5SN%2Byva4MzhMx5mxqBIQOcg4VAYeaIkjN4mH75UmTF0DOKm7ciDKvxtsEWt1KDt9gBS%2BTCx4K6wvlBjSzn5mJ%2FJkzR06t4a1iXDvBmFcuBuNzeDhSU7h95As662aw5%2BeBQMTuWixIUE3bCgN5qMoUKKG0Xz2KslTLkSbhe4H1GYDuo0UEr3OA1aLA8SHcH0NmRIbGXyevfmqe0JqTb%2Bas9Tn&X-Amz-Signature=818d0a52524f87ab4640b2cd57d996cd09e910279b33ad0815797f3dfc76cf0b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQBSV34%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T141237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUl8wMCeOcRgJMjA2ZQv3YPVM3XVb5gI5WqGvq2fImJAiBFjESs8y562d6AuUrPBcdlrMUqoMFYQ8dwNwdUL9Z7RiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmHrvFtwzE5NHxR2KtwDE1Fr7mt7wRbpUL8SZLsc%2FSXMkIQzUX2ZKDzPi%2BFKmxZBPSAKSa9VT1VUmu4HAneFjOuSB%2FsC%2Ff%2BhTvU4xIOedCnHzyMKxI5LdL3M4BaR8UTDeJvhtms6eFptnJDo3D17q17w5yRwtEwl0oBss6nzhLfPD1jpxCQ%2B6VexYVQH4NmhV%2FE6mu40LtbKmW1rxw5fVXbIiGVpexViFTU690CjM9kDUZgblQaHPCLZAlM6HnNmN6qqyEv7XWI64SUrcMWUEYKvM75E3N0jgHPDD0KAMNhes1IdBoeFOMS1oN9Tee7bj6EnULV%2BETm7mixdG7BgKV4k8ivO%2Bd00RhwwmXS8VZvnp5GNdI5sfAX2bRE54FxyBPOKl4M3z27Uf%2FQBConKUvrHcXu8IvjOSIQJGINTmqy7iMOBmalDGav3olxnkS3RF5lgP5GdbYrmw84NImxtG1P705yWArKW4CI3ain9gwWwhDRaZaMQqD0zsaTPyj5BVWQiN1PsoBM6MkwuMz150sZN7AcYaX%2B5Xm4R7Q6bkFHPtSd69%2FBqKmkDhpn1NcV7EfGdMgG9Sn7S18Aa1Qk%2BJ1gan0cJqNBNjk%2FHGRa3kBF%2Fu9KWkrxJz6yTDcArbEPZrbKM%2BwCKe566jP0wnJi6vwY6pgHqwcYv%2Bfq0lJCKP%2FOrdDm9CnIxb%2BDgf4o3k7o%2BTPwwPmERjJGu1PdzLJ51wqPG7q2Jf0i39Vc47Xoxht3jxDWD%2FXz%2Bnaqg6J%2Biow9WEHJIu6OlfyrbxYl%2BBYVrKuh7NlCvgrjGuI%2Bwx%2FzPUKCj6B1PzWTQYIqgk6JGv%2F%2FxULA5tvKLith%2Fgfz9PbdrkOVpXmFqE3QGmLTHcBij5s941GC14n%2BegAmC&X-Amz-Signature=60e478af5c056bef701271a8429398ed0c74c0e7fc274a65638fcc0654c39be2&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

