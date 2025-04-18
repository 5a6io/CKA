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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQK2RPO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyECF1lqxnKHhQZvmD4ZDJGfXv6g062uHVmEfKIKIN8wIhAKj3X6Ma7dK2Zxe%2FJPY%2FQFLQk8IN2rt27RqK7ySfME2mKv8DCHYQABoMNjM3NDIzMTgzODA1IgztLqtGu98Yu86bebAq3AMzXfreMYPLYqJEMSFc511tZ4IQq9GAFQWbqJSwJqfXG40VPWLPxJI11eu56mALEJvHUjpXgx1TdZKZQkuP9FoSs5z%2B18QIYenvpEzf462BMSplfSrsfULnDttuCpsYM9C0THXrKaSnnMqI%2B2vvIxVuuEULs2jM4XZ3N%2BYoFbFkg9xSwR5MZAnux8qIha5kjuc4Olx%2BQtYIpPrXOO5jGnnytq3itQjmf6Ry%2BTdbXtjQ7U1fTPVmiCyhSF1qh0zATnJemeeyfIzLYsdCFTQQFqfHG6iDOM0C%2BGb%2FOga3scZ6oZm3pviDJDtyeapZr%2FbEeFtbMcTbHihkGUUt1h7n%2BprnjSjn8yOeIMVZq31jQ5Jth9qTaDbsf9dMRZpmrgbr8V0IpV2OcS6w1VfHPV5MjsN9Co1N7YwG9jQUQYWKdjW20jw2HlpIR1y4UmiSQxjRt2BwncgF8PMv2Iu9vqHIIW5YMFMIeEMLPkxv72GfkxXCGvEdoKeFqb%2BDIrdmnGwt4gJ9XRJbWjXLbSysKm3fgUT7ze7b9kAluaUKNvaHaPkVrPsG1LuyTd9g61d20GbfdlvorwTbSHOyqj34%2Bg03M34Yh4N4jhBO6NWH0fEsoy305JIMFnr2hUxN6AggwjDmjYnABjqkAXjvH6g9A0jyS1oTM1jEgX9nwMU1l2BfgQLAqvAi3FnMnZmkNYi1y0SzMVaz1xQTjUMijC9%2F9NHK%2BIjGxZToI6blxSztvL5DpI217AAG8FrUMQ6dt3XXOWDQ5YRGb22MN%2BAfMjB8Rju5DoVx07ZPcYtYDfiah5eKMb0sm8xQ2Ny4TDobw8ZmGM7375VPFnHNhnVYEFJwJb1zXkvrrm%2F3XSRsDWrc&X-Amz-Signature=88edc51fc450a2e11fff30dcb5ec5ca8a420676f0e5ea35e06aeef9c66e25349&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY5WHJU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA016iaziwAeYROcpIRfMnBghK%2BAmkAC7v4wVz0htDVPAiBAJc6w3%2BtwlE2WgStAIWKlTweFRS4cNyzhivxsa57RsCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMHsJBEzWyFhE%2BOvbRKtwDTksMFJ53GJmxvFjV3U2fpsvRbYejg3DW9nIpyOz88%2FfW6uIFvC1JU3rs5Srn5x2v50klyR1C39fpUC7ud%2FD0snNn98XowUpQRuuGeXISnV1yS0HEaTfsGkCVsPZ6o06FmiD8XIS8wIfGWc5tQ53Z7qAz6UrKTGDXVIgitvg6X1T5Imjs34I6Tqdk10bkMTsRQasopff3bWG6av2PbPnUmP8NoBmUxnwgHJtVfSs%2BtFTCtbXan476AecsLoEQLSWggQ8eQrhYCkr54o1KFUb5U2rcp%2BCeZV6DoWgBL0quR%2FuA5uNP6sB9iDs1BK2OLtaMBI5VcDPyVjtFsx7VFtlL2DhFr2YL8ZaTrfMVHcW27x527wj1JdNQ34mZp%2BcQeY3erZV3HBPR4%2FAHFpHZACnyxLRMzelchQKkgwC75xfJ7NicfmE1suKLnABW3uZQcV1FQFp6%2F6Mw7JivVls70sgkZ%2BRuJMEANH%2F6rW0cvLs4yB5KPOvfWQFkKaanDJv7cN2zfOOSBD1m5FMyI%2BqdDEpIAzzmdWIZoJ5Icc3C%2F17%2Be4XoS0r7G3QQLcDsRB%2BwTCDETyK%2Fx%2FQ09AybcAwiuboNRyxtpwR2Du%2FvYXvNOO3%2F%2FdauBh%2FUSaK%2FL5s%2FGcYwlo6JwAY6pgFVk1Dl0iGGEwOUtqCVfdlcDq6wmrnLOgMg2eytHtc7ExYURtk5Arq56ldSiU7dYqUnZb4STfzOXXMv62Xk2LbvkT%2BetGJ3X0M67VUUNIlfTd7NeitEiOYqISFsIQUGJwRFiB2DXpLBe09ErO23xqHIakAmgAwrNTEKp4ybYhZCtzo49Ik9faUMRBJxoOXE62MJdDn4wTNTVzfb9v1KXqHT3sF4IgPP&X-Amz-Signature=2371f05af871332604bde374b653a8030973f3f05bfae1b04483d74198d87a57&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6KFDK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrLKH%2B3Wifg1knVIYjvDUKNqwCC4qOthy%2BHYWN%2BDip7AiB14tgpuLNu4eH2GvhLZj%2Bx9YdFIzZsnT%2BopShXeLYmZir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMtzyUb1Obs2ut3PZVKtwDRQZ%2BG2clKHxcLgQlQgnjSMNS36FbF5dN4hvYJqsVj8cWn3qLod4r1Bbab7s%2B5XXxzrCj%2BTZPrX1m%2BWs3ihIQ6xxnM7Ho9vfeiYwEFnAhbg75GXGSXIRaG%2FAdSgu343hulTF5pdshs9GlyiFy5awyBB0OZIWqCc9icLSZcXqkIzm8XDTXTnsGSVhhPHRC%2F%2F3TzAFL59NpbveY2oHIboqCORIMpjBFm94lAQgaIJnjYDLAcOYuXH1bf9gDvXSz041c2YPe11i%2BOrOBqWrmavxIDBruC1IJygVwxlk%2FKHTgyVqpaL%2BUZG6CCzG8h8BeyHx9z4%2BSDDJJ1mzZv43NLXxQT9fHfefagewh6yTQy3%2FLqp1WTvIjS0asm5Sltjv%2FJtOerQ3ROS82OKaBpRYC08hc%2FJwWrIVldrSIkZ6HXdau%2FeEehwJQPRIGK90klaMuMNbV%2FZ79%2FQ6BsJLKP5RpuYRS8QYSYUNhG84%2BISEf4EOz28gRkUMoXxmaZSoDYhGb7IDtSgyPzDNDJ%2Flpv5I1J%2F1m4rIINPFT6fdFRl9isKdklESHoQQZ2eVE%2B3F%2B56QSDq28d%2FyHcLNWLfuyRmd2qGkjyZQ736Bn%2F7asOP%2BR2vwtzyBD%2FQOxAZHqWw4zZ%2F8w%2FY2JwAY6pgEQ872HyG7SOx5dZ15D08CiWSqM2BeyCXLjKT9s3isVXxjaJ6F2son2FN766FElgk1FKRtNSfb7F7ss%2BgTpe6JjOgDE9Z6mfkGdfuINxC9%2FygKZbAoGy7to94cLXRuStZwvTfualno0k3qH6rUBN5EJv8W1csDK1RTeGARzMOQXLlZtGYtTatv8KOG6ZyCGlDn%2FjduBbXoVJeePUtTNWTY2gqj16tGd&X-Amz-Signature=d5b89b729bb0bd642456fbd2ad138fa07ec52207e8e7f7c78cb7e9e57e8c4146&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHYGOFI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBkQ16j40KF%2BzYyg8qdP9nlnzmxw7DujcbAqQ9pWpTywIhAOKaZI0QBoU%2FKhH14KRYkXaXw3Nospxit%2FXPZ9l%2BP%2Bd3Kv8DCHYQABoMNjM3NDIzMTgzODA1IgzLHqoLmYOOBfJIowsq3APd3ARWl%2F11WNyGrE8kx9vKIF7esCE0kI1WXpUx5oA3yImMWpdkfGJg%2B45Asl5FasHuK6WevKUOwP9q02k2z1YfAZG6wDxUA7Avz3l%2BpBTKrCDIzRjmUVlxXl5BAnx620qfkVzFy3YDlwCYMBWPbANoDI377x9vejEWcwKr4hUMoVBAv4y%2BncCEyezEq2bUWSCQ%2FnOI5THNvWQsNkb2U6dh9qRflYmfFFBL3Hk7VlxDm1ibtWEnds5SLb4MiuE82BpLTDzrgcpszEujZvUzQ9ty7uCy4X80m3IZ39%2FrZYzG6rSGH1FP1JxnVC6HxIEgp8YU0MuRGingwk8Ew5o%2FjhyWYr7KrHV2uvFAH5DvWUdaLTxEFJl2dGpxJZQgxSyU6DkaWEgc10dw%2BsdO0%2FuIks23OfE6slOA51OgZbqZxmHGFvaSFKVc3CCWtM8exyWnUcoRDN3PE9qCRVPLXHGVlmyR2SjQ%2FMb%2BiR6DXeqfvEDUqYXrSx%2B2aT3PX998m8mnEyM0jahUXb8dr%2B8v4jaXECV0f49lavpcVmYu01XFTiUOnxAw559dhOOgRDQ53sWKYL%2BqADwh8m%2FyRsFvQZnljNO63e%2BW4%2Be7qLNQKZiwkM4mnMBrR1Dsn%2FiJis%2F1ezCijonABjqkAZHN%2BwE7l84o68dI2V80qzF7MoEPmq6xA%2Bizu3a0sc2wBqSSGW6Up%2Fh3nDV2VesghMv3hTq93epi10Yq0xdG7Yr2y1MsZAepWbA8b3FyrlLcIyV10I9kmZbUK3ulc0EcNWJAobc5E4fbB4Iwp3rvZrAaQtR%2FjKewsV2BQWFWz6wnimHL%2BRgw1vwdVUX1XYIoWuKJ%2B%2Fi0o%2B9LszWvgQGrx4nB54YI&X-Amz-Signature=79b8323b48396c002e476d2cc8ed5fa6d233c276030adaf64e3e090794f7e861&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTP5GWCN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtKXt0SXMRxOMOcwienTTPprtESgKxwH80D7Bh6reiQAiA1kpdI6IW2HPiKYdebvowVHwFU6F92ic4TNWcU%2BqO%2BoCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMO7rzvGZZ%2FgLxkEaoKtwDCt1ZnWCdl4HTocZubj0DWO52QGpS%2FZ9jthaHWRyyFYBFzenjq1rdlmzYdXKRh26QaPkfhwm8QgeXfILZwajjzv9APeLsUapszQNr5Ly1oLB%2FnhfzzfoV5HWMmZh7vAecykDc417mLhf%2FhyAsDHKdPfpbWY6VfJwvTyRfAJlOPYC6TB3iEorXcJAFBEK%2BGQx39dKswnbNTu921qI37WKkcXDOx5%2BvwFRbIyMAJ4GuleWMpZ367LkZoEfBC3vgwJmyYQAvu98OGH53Za4lYfI0EFz5ct7gNs6shGKJLEalGn6Dp%2FV%2Fj59PQY2DDZza2yyicMsPyoQPKYlxch6UbX1fkfPC6RTn4s6LhFZwEppG6KbHPKR9sIgw0Bjuw4lPkHqf4DStnltYweHe0Ve3j6iwg0dNGhaBw%2FsaHp0XiLjovSgZtZcRXPiVRhLLlSuBu%2FzeP3%2B1pqPjQe0tx7D32doI3IMSQgcTZBzpzkdsEffAXyatzkg1VkggkQlJXwhG3YaIwIbfupcrpl%2FAJjwTqG9YsD1I4gmH5njIYxJtD42OBFyNr46QYubi%2FipuREF3mRj8g7KMnNbEbDDYzthE%2F%2B%2Bp5xLeFOG%2F%2FZAIG9kuKZzBBHvxVgEW%2BDVTbP27vPAw5o2JwAY6pgH%2BqZJzytKzmi0tHOD%2F1O4MDeXoAE7yn8t1wcax6IQ7sw%2Fwju1SI9a%2FclKK%2BLtoQPnTm6Lr3YTP1i64XzLhUG6mGE4QB52LHPJxdLcUiA2SceVufpk4PcDzrPvfM0QsqBjZYb6EXEPWIYDrLa4Zg%2BLvDs6J6It6tNqZA%2BSRq0n64Vmh8Qsbvz4MRlem8UtFUQqHzRw1kOUGE86gCF97O%2FBdaFmpx8Zq&X-Amz-Signature=b87dab39a80f693947fcb35cceb6c3fd578462e6c2d35ba2613b6c7203e39b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4Q6J2I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcqELrqP9cUZIYltCzHToJItVhO3nkLem3Fz3vCsoIxAiEA4PVMCqjqpROdWVUvCi313v9LZ3MUzT%2FznDPjiN9WcJcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHYlz2AEDFboUQLwUyrcA4UdeAODvLIKfSg4xZf%2FgmZNvGMULuBSJvIaBGphkO04x9CVtk9pcsW3oKQhvhUzKY9n4qn1xreFaLVoWypHFql%2FJnjDR0fWqkSFz5wIe3F2MNXOs9D3zpJG69%2F0dyfvImbNre5DM8W6OnxDtqTSreaUWvvTbAOSsC7%2BBJMneY3MXMmFtkcctqBjurWfyGXnu9xRQ5cXGnoRL5dyS7xBjd0j3rn391df2TQ9ifQX5fhBo8FUQq6OdyGYOecw2dq7BBmr4DUhScasXEgCX1lKbc%2BnGn7XfPDcrnrBUST9nW8zRvVHh4%2B%2FTT7C1p70bZ0dUptoH8P8LIvOBOFqXsHRVv0fUergQ%2FNdrpHycXP1PDhixinO%2B8x%2FpnGxEqKfSq1SPvY1Xoy9pcZM6%2FhXxqLWUupaU0B8NnvllKj%2Fils1ZQ7l7zP7D5WueXSHtSqQC%2BE6SDNFmY0r2pbi%2F4xLkcuEr76XOzgbqXIO4JArs9sUJcjwpsvLxFIa3govLwBSFTO9zO%2Bm4hPvLKfCxtTzZjXDzG86LBtjVr8NDfwTe4QWoA1ZeOQdPa4QjjT2qnuaDFCRqQ%2BhuLA3Gx2O4CM3Pq%2B3OYg4yffXYFFErnKcotUrlNgl8cOqiO4Ckw4LO3mqMOKNicAGOqUBZMko9mweOgovo3jKdofasOVv%2F7K3d4PRmLSQn54zm1qa%2BcWBaXMvjsxR3JFAW8eJNk1MXsb4elNJD3stg3o%2FpvVBn%2BStbblxUG41WIO%2BfoZxdNRat2Qf7TnCmGdm5dtB907vsl%2FxxKeXBDLFgB0RUMzVrXLDXCcnp%2BaMC%2B6yo4H0rQf%2Bx7CmkCBIIqK0xDCIjZDIV2zp5NENaR3e%2BQF3IBIuxXR3&X-Amz-Signature=aa300f7da861d3032bab2405da7e7f7611c6b0802003b03ae77d420af64a72a2&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5XOOST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVerLDJhju2ZGOeP15pfWtU1J%2FbjiNkbfbzxCmLft%2BrQIhAPrJ3SNZ7IHr0YuyGbFy5n0iipGOAIGTAnB%2F%2BkU0StltKv8DCHYQABoMNjM3NDIzMTgzODA1Igwk%2BN4NT9SmagRG7RUq3AP8XIE5dl9IQ4q9Dl9eC3icqz%2Bq%2B834QGtOMTUFX%2BvNQtxK8RagmweKnxb35hNPzWKVa9%2F%2FuopCCLmXh%2BHC088OiZtNnNF6Loc4WsaDlEyyIr0cmOiZMjq0XjAho1%2F0kluSmrXwbDZR50VAhH5xXCaKBuoauBv8vnwk9Kc5jW72E9RFZ3tZFCNfg0hXBlKKmnXIBMNSf6%2B%2BODHTHDVHpohaY4whjjUn0qIyPP3O9aZaYRSIGkE4DxuSSXzWrfkBu5bb70CBhH8XN%2BZNd6G2v4Pgcyz6eLRdO4PgZX%2F4orXE19samlf64V%2B6lerPPW9CJLmk02%2B%2BQZsGbGwiS6y9Q%2BCOmVQWl8tchKol5lflJjthHarwBYB1TiMBZkVbj1GoHyCOcI9M4MIQapERq9N2Cpbf7XGIHvJdX1e6mX9NWwgxT7QMjB2VNyZjWnP35G%2FQgOr8C6B9%2BKA6yrM4xIRhSvbHHWRguGoyr8SdV7egYNghI%2B9pT1Er0b3OpG87ujjxy9OK2pB04IvMpv%2Fw7colUxnxkPWWeHtFZV3KflhMz5tb58%2FA9YujXNFBRFhS1lkDjDPzIAtZzHK4lWTLLw4mdLZ1wvtPGcncgTv2wgHNjI9zmZmguVTXpGmBLwhkOTDpjYnABjqkAZwPOruXnttqS0n9sV829iEa69q2eUEWZnxUnfFHMh0usRWBy6zEhJBx8pXshNH4VC2ZRqRQAKoGmYu1AIHin9CU%2BP5XFuTmmRVww%2BOCyBJXxnfM%2B4wKIOwH70n1NoQDRcz1qYwJ1NGNIPQMr3o%2FI72nrs1CUqeXunzmgAWuD7S3JJREnOp6YUqUDJ9NJNQM6vcSPbrOWQMYDs1MCR%2BbqZIjdTy6&X-Amz-Signature=e040c7d36d410154067ab8aed983051adefc98885ff5efb201b3ad6d013bbbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27TGBUU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPPI9CPDg3Pz8nDY5qH%2FnDdPyVq%2Bhy%2BGiZsDo259P%2BEAiEAn7zVe5lvgu8qyjV0Z9%2FG9258Tw9Tx7Zk%2FFUSfDGvrCwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB6O%2FECdov%2FhhfIbFyrcA2tDOyKKXrR92Pgxh7UQQ67lEaNFCbS7DMsKUVs1gb5WKlazyT69puTRD9WMNSn5Q7WC1sBTMfLUk2NhvkCHqY9Ce678c5FAq8Er8QWrQuQIEoNc21qwgsWe6FFFuEXFcvlYb5TblulwDM7a3f2MbrGWjlKcpvUnbbapTybw21JFRwTZdzXsW%2Bv7vcFS%2BukuGQHxaTgqUXcp0aoU570phToTccXbdC3B9%2BW2vZ3Beyzl6cXToeiKaAHoJDaVZ%2B%2FOsEoUT%2F4rIVSlzJ1SLC%2Fz6eCI6zAy8KNlIhj%2Fo9zTmqkgv%2BJqQJPBaVPSWOtD6Een%2Bib76Kor4wwXBcuwjaU3i9Bq8Dv0mYHu6yXtrpLP3WUHuGfISRtKN5G%2F7KbinMzIMaAqe4LZEsSJl8kTlHF1MBl00Y6Aas3vaZ3DRvoe2es%2FD9kVKzWb2ThScEC8iZ1HTfYdw97caH2YRzfVlnGPhh47HwC59Iu346JrTsVAR5Jqgp%2Fj3Vt0ABsJ5e0mY6RNNdtv3R9zC3pquRoAYT7%2B0%2Bwh0JIFn%2FFGJROborNzcMQneyWzWXCWh5Xy%2BN1zJvEyJxd0S%2BEQ5mHSU%2FxxgrS7oI8Y6jfIMgLVZu3GXe5%2FjJU%2BM6t%2BwR6ER%2FJlr9IpMM%2BOicAGOqUBsc9X2QhG74XkhcFIrg9msEMAKMyr79Wl6J0goZx2YJp7olUTRkrc3Va3y0U5euMGHpFb4RE8QvFxzHchgbCgFH1jUlNDE5lLfu1HF6%2FqGPKpCyd2ZPKp9r%2FsAEgCjJVWHDyZ3ujUQhHmeq8wRjHQc1ENXYp2Yy%2BkSEKImP3%2FQwyASEG5CKCAw4sqtaYUSu%2BxSTwpA5T5nV8EsYO5edEJqpJGPEaL&X-Amz-Signature=3980585afebfcb0b7db76fa3c3558f73f4874bc729a5956a3319a29e28cf892f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDQIMZ4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T141132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGM43UarxZNEWmjNY7fJwVps%2F7xhU5DK1kai8DPHRRnAiEAi7b4XyGSIzVJ5EVQyzURH%2BYxepelodXt3mqd9aIkdJkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDISkq6otX%2BIpCmSvNircA%2BCNBjUIALjKgJVxFqMrSJwZrvf6b%2FmwlZaAqy5BB1%2FUy0qAg1eoTV7bVPsUBH4vcyal5pQulnTVhwHP5zYmW0Uu5zDNgd594Hahy0vFwZ8y2V6WjsgrsI3HIRZKD%2BIFnbCVKNxGYrPyGPUSPWOlOZnuFkKfk184npKxYMTvvhsxU43nqJhBGa83kIWkFk989dDR6hZpBOu1o%2Br%2Fhix%2FNIAbwWEJsGTxQPA6ovTY5kzRS2bk53esIqSVh5xrSKaAygZQo1GFtsx9vxXADLZW9elYppG7nhhOREM6i3YwF1uT7oI%2BZ33CXvIiAvVQv5y6rNfxqfl94CWudBlmh11oJoawr3g%2BQ%2B%2F72XgMOJiRL4Nyuc4cGSysRBPEFkXjoFfqqzvUNg9pDOqPCvFMiZ08F9jdLRD2vya%2FmTsj87kHL6Kt24xb6YKTJlvYWVYrdKxTAXXKjtnH6CQB9nAoBjJ9bllU6%2BvBPFNIzE31sUHNLE%2FXcEQh%2FEZKZH5RFN%2B8w58F8gJOvk08btT0W5yPnrjz7%2F49gjZVZgLCQEFtNEXhym%2BHJ%2FdHIgEMU76lLrelJjy01DxHwqTHEQBJcTuVeJ12Ud0hUh%2Fg4WR7pJxgWCN4pcNLzCAribFkXx1X70oQMISOicAGOqUBQbDXmIw7OKkP2tYTXVAaUGysVLoAYeyx3EPCpdT%2FDRvb4CKgnKD2vbMsfAopuQsWJRhC37TT136iO21sJuXUeOnGUNK0%2FGiATg6BiQh%2Bwf86aRViE5f0xduyzhRhyKRf21SWDwVgfN4z0%2FbZObxfdGd2KcJGgbNTktWomfXsYBZiqdCmPXjFN9X%2BBvoYF26QtU3gbdl4uLmWZV8iuzPVZ7T0DqIW&X-Amz-Signature=2e61db18b53a325ce705b93e973b8a7f6ce475e7a5e7b2d779e8016aedef9581&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

