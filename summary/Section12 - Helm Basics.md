# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFONMPQK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC6Gpu5qb8AU%2FWZsrT1kmTGxjUcmzdtQc7bqOLCB9UPlwIgar3DprTBhfkHD2SDSkIpSYTdopI8y%2FpdRCd3%2FpK4Xwcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAALjAZz8BsHGPBppyrcA1UqRuUJqUOZMkNePxDaG69eCWZhWOTKrAcOyYKK895QgMDGe3bI7Zk274OnHgbFwtPqs6hFjd%2B%2By%2BKov0mGUPj6Dkcv9pE%2FIkfOTFrNPoOhi%2Bq1CP33HQwbnlGqk3gBhXiFElHR0zhRogfoRV%2FeOjKm58wA3jJodUhB7UnTApxM%2Bey%2BzHcEJHkOfNwQ3kr8xGtMK31MMjKC%2BvAaym8IEY0kHcHVwv9IFFi4xhbLJFN8yrTWFlfk7yJuFlG%2BszQ6lDNYM%2BNlfPVtqOm0Ar%2FbQYRlMBKgK%2FMirDEaYWWSEp78Yuk1rAgRaru4V39G2LcIBGai7OZzWm4I9fM1onQDboDlp3qOpRIoojJWRyhQmT1tW1MzeFp1KxeU9k08lxzFsE82pOnkeWbiIP%2FvuO60b1yVHHXjiK5mGzmARAB7asgrsNMfc2Kh9hFHaKTxwBaU%2F4dU9CfJViU3KqPit7At6ImD9az%2B10YTUv%2FcYX0JjcuP0Vdys7zEX9IpynHUmRf5lmsFAv71Xn5vjGOOpIZ2QrPwU1Mk3SEelwzoc1KuXKIRXAJ8VTtS07p52Q7kqyCvcPHDAk3%2FxXYA3W2z7i1UpO17dzhvOYHH%2BxfFK%2Bq%2B8Ik%2BRDDLRA6g%2Bk1Gqz0SMJT15b4GOqUBz9R1x0oDK8oxzAVgtHDpqTw19%2BIeGgLPjPyyE84JVVSlp%2BuIbEn8L4j3yOX0TIbdN6XFy9wlTXsT58bcKgcGvUFIpPfwX%2FTVj4HKtTFSOjt0TWG30HYYH76f0lWZwRzVnWWBzZN65IojFktUjwrM5MLN4dn%2FVc2Gb%2BH8LlX0huBKo8ol6mgTLpgkmDR5iMARRv%2B8TckRTrk5ScHKqUhmkvNya32Z&X-Amz-Signature=bba7f1393770708ea931a14efbe9d079f6201ae2ffe60bf10fd25df81af13109&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2XMSPK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7AmPMn2l9K%2FhX9f3ppHIS6pYbRvmCqWDOWKmWeYokiwIgHGT3gvBoCUdI7sju7qGvdpcpB7cnpB2EOyyXV31E0Ngq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNeZipd4Db5OsSXneircA%2B90F7YBZzISQjGFKfD5fU05UAghnpNSdexyzsJqCC%2BVEi5saZCUkgOkMLf2Kbz1rpnzGN0EprmbqgBPJGmYiPPQAErKpd6f7hSzOtTu8aGIeP0LSnGfKbYZZ9xSiHEvNkzYzKN%2F1HkLAUMTk50oNT2hYpgEBeiZYMLi6q%2FKTNS3vSdcfeX5nLaiLDeGTfrtzNKpFTEVH7lNs9bYIIsCCNDwWF%2B7nC5%2BbbSqqoIfiHGaRosIMD%2F6Rj%2BJ2NN3fYNo4%2B%2BN6Il19s25kqtT89i2itOZCpzXedTSrBQ4Cbvt%2FvCDpwhQdsCejNvwmepgcCNxD91Ew1YfY6IB43EAtXDdS95N4TK%2Fqe4%2F5oNiNPGm9763x5EcZsgJxqnlJlyzlxttWUKOEHbVQCgfy8ucGxjc2bGl3HiA6ni9Ot7y%2FwO1Dm6GRADPkSDcNuWqvAOFGRfFo1lVbpsC3ZpEofbhKnhFMcfpNP5uc3cfuMyfFaFGpV2SN6BwJUeJYiGBEvcN35e3S5VkK3MNIiDu1NL3e%2FMoWQna%2FprdFwKKerMbMVZ5r7fQn3sfTxKXxdmPXoxS%2F0yykKSb5LYd96tPNHMZPiQU9Hy%2FnkrZ0YmnF%2F0k4hLdW6D7%2FnkSodCRxDPD4npCMNP05b4GOqUBi%2F7d0y3g0fMjLEcHb8EUAGJ9668Kh5ocZrjH6WwNiaKtfc707MF8yr68TvOyiNXdiQHN3isu%2BQELcNiZD4wkX%2FyUz929N6luXyfBugMreIxvW316XrU63h6C3eD162mweWQ20uGbW73zjxHzhJ%2BKArMi%2FxSzdKJ3csKrCQfPH1kM2vpoCE8W5nrdvEw7RMIV6nsfeen3qqEND5JhzrCXKOq%2BOTS4&X-Amz-Signature=a0d82c436dd27a1f519128e3e5a7526319300593ac5081ffb981370b7727a569&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLOKKM7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCxoVfGh0wx9QPTTXMCGbAuFJbqmG57yjIp1%2F0r8VIjIAIhAJEk6sUWt6%2FwjpKdT96DTfzWRh9PHhavSUQb246FBGx1Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzNvb6eA8EVDLh7ZM0q3AO9HZrWGBxylXsuhUY%2FJlKezRNbehXzH%2BFNixV7i5gUYY01wHijOotHKZyTo6MqsVJWyEYXpu5V0VLoEnthxjRw39r4yl%2FoB4n9Z7ljl202uhde1RpHIXm%2Bl%2BmcxmowwxSppUU5aJeYKhWw2TUakJ%2BYDE9Ztc7L9ffOF%2FRRKTVQ%2ByIoaxJJ8CHi4yKdgIkw3Gy8CcoRm3QxmsIIK%2FaN%2BM0sgNQVPmAep7Wf63pPfhWQ7s3TUCpv5T7%2FkQPe%2B2wv7WYbw1RSkJDXKwsiSmuUK6DhfGC4a69EF4MkOjzQaV0JYHOObBbkrn6gR%2F5EHybDrvue3o5Tw83y5MfAxArM3YspJeOZtiCYRVqay5BRL%2FkozvVfVV6%2BjQCF6G65M1bfKW5d5I8s6dWq2mx2iVjrk0Xzraqq6qItV54OoVMsFw38i7UfmdTye3MkxtaLV4AOQgVjSqmLZszzadpTz%2F8sfVyrU2flCTZMl1YViaAMVUEje7e1ycmfgc3bxDtBJ9yXMiZBwI2SnA9LxTWuKBO4pug%2BbGAXGIxarDe%2Bebf%2BOzFU2MD1gubyMWcaLLgYRSADQ4DZDH1h8MbKldnwFwmf3MfF%2FChPluD56BY2%2F4Tlj3uhKMy%2BH1lzAm40Eh8LnzCP9eW%2BBjqkAXN1ODdsMB6bbjYSXEIKI8uEzFFZPld5CjEFZ%2BGQfVmNFARvzC7aIdKiW1eEfpdZ8AnXAh08DSDWTu7VXdIDugyXlIPo2mZ5QK5%2F3wOGtX8MTmJeonva8UDwTcj3H9AshFcBnrA5G%2F9QFTv8IEO0kYE0hujquZRq0h8gE6qpMnyH8a5k7795wWiCxe0IYKPMSZ%2Fmngirr7HcLOtxrve72Xw%2FlMqh&X-Amz-Signature=ae54a06b7fb27ad29b211569a157b5f17e337bb7dd4b2613b9c500c632884637&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2XMSPK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7AmPMn2l9K%2FhX9f3ppHIS6pYbRvmCqWDOWKmWeYokiwIgHGT3gvBoCUdI7sju7qGvdpcpB7cnpB2EOyyXV31E0Ngq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNeZipd4Db5OsSXneircA%2B90F7YBZzISQjGFKfD5fU05UAghnpNSdexyzsJqCC%2BVEi5saZCUkgOkMLf2Kbz1rpnzGN0EprmbqgBPJGmYiPPQAErKpd6f7hSzOtTu8aGIeP0LSnGfKbYZZ9xSiHEvNkzYzKN%2F1HkLAUMTk50oNT2hYpgEBeiZYMLi6q%2FKTNS3vSdcfeX5nLaiLDeGTfrtzNKpFTEVH7lNs9bYIIsCCNDwWF%2B7nC5%2BbbSqqoIfiHGaRosIMD%2F6Rj%2BJ2NN3fYNo4%2B%2BN6Il19s25kqtT89i2itOZCpzXedTSrBQ4Cbvt%2FvCDpwhQdsCejNvwmepgcCNxD91Ew1YfY6IB43EAtXDdS95N4TK%2Fqe4%2F5oNiNPGm9763x5EcZsgJxqnlJlyzlxttWUKOEHbVQCgfy8ucGxjc2bGl3HiA6ni9Ot7y%2FwO1Dm6GRADPkSDcNuWqvAOFGRfFo1lVbpsC3ZpEofbhKnhFMcfpNP5uc3cfuMyfFaFGpV2SN6BwJUeJYiGBEvcN35e3S5VkK3MNIiDu1NL3e%2FMoWQna%2FprdFwKKerMbMVZ5r7fQn3sfTxKXxdmPXoxS%2F0yykKSb5LYd96tPNHMZPiQU9Hy%2FnkrZ0YmnF%2F0k4hLdW6D7%2FnkSodCRxDPD4npCMNP05b4GOqUBi%2F7d0y3g0fMjLEcHb8EUAGJ9668Kh5ocZrjH6WwNiaKtfc707MF8yr68TvOyiNXdiQHN3isu%2BQELcNiZD4wkX%2FyUz929N6luXyfBugMreIxvW316XrU63h6C3eD162mweWQ20uGbW73zjxHzhJ%2BKArMi%2FxSzdKJ3csKrCQfPH1kM2vpoCE8W5nrdvEw7RMIV6nsfeen3qqEND5JhzrCXKOq%2BOTS4&X-Amz-Signature=e81e289156be64c358d0a2e7871be07e90cf9b2fd26bd2329dd5e7b571f75426&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZB4IE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCv36vemo1x9SxFTVcQh9ubA1izcMT4NVBNP49JM51CzwIhANwNZmTX6LNss1VZ9t5RLCvZUjeK3ebRfDv47uUB5d72Kv8DCF8QABoMNjM3NDIzMTgzODA1IgyTZKJM4XJNTjBrx8Eq3AMBkXrODCd%2BRYbzY6oh5dGi96AguGnhTPgRC16e13Jqi7ZF27izFg%2F%2FIexIhLzkR2GpVzjx7va9QUJfDbkh0BmfWtdYKNgsKDmkABPRtDVSm4qEH9YVjj5EAVbFG6HqziWZ1TJMdyJ196lRRuXQkyOubp%2FDLL9%2FzjaZp0sHKp%2BaRdJFo4AV%2FUcAuXj2UtdLnWf78zJ0fVdX%2F8DaZtZsZ18GdzlEnZPr%2FGIj2mET2AopAMdvJU9iYNCdrJNRsuAbwI1e18IU0NOlLZm%2Bg14%2FRTycYAtLUaB8dZ09EuANrq3GfYFGRlA4yECPI5LrUazIqTR2na0mQMhlwzE3obtAU2pf749%2FtiJ4KfwE%2BfqiWYMXgBtN8lSZ%2FYCeGpqcxz5YsCTai%2B%2FSZKT5V4mcOiPaXgF6ayMulp2uF93TzO3WuIBCDL%2Fj8WfRymQ1nKS9eA7BZstr%2BMFYY%2BYwX1vdySIc%2FGR%2Bw%2FaLPZGv32ZKozexxtlHKUgFUupf2U6xGAPUsz4beu964qcrDUUqBEtJyqN6lVP8cLnEiCVpHWQdFyaXxaIDoGuXskeroxer5pUP34NFvvZxrqEXiRH51DzHd%2F54zOwz03LEqxA3sinuoOhU7gjIha%2F9tnoxPC0G0CPA5DDM9OW%2BBjqkAfeEdLyz2VjCEpis%2FtDwxfVsaaRlKV4yMi75151ccoFGr9AmQ%2FMgRGvB8Ck%2B4KgXMfvPuspj2JXPdNcbgbsTbdz29EYcv7hGxTOIOeN6DbRb86NOI3HdnkIPDx8RIWeVuLAloLhQeG3RrVih1kTD1LqNwIEft2rHCm%2BK1VtPnyoWfjsdAtON5q2kwncHidN%2FpBHh2acClwR7foDw9ZVbaFb94uil&X-Amz-Signature=7c68b856a2ad55255fc18a54b80168bb750d1feb3d6a2dd11e4669223ae1a2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDB5XCE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGuaKDFX4Ni6srQD%2BEt3pm4ce2PebK3z75x%2FnIJAKi3KAiEAjkNtssMoQITkQBvf3vijn0YVWjZcv1vHVDyOfmWvv2kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHcQz4RU1YlHDY8vXSrcA8vKUP3%2Bkai%2Fe6Rf1ygHbyP%2BYsvOmh8d1IgccfGuZ2eJkJt2uIIVLwEGSHsEUEZlQxm4n%2FLtF1ORdb70eqeiSaFNDyBflbq6FnWHgF%2FL0Yi9mhc9dqSK83vN6cAIP2st2iSYrEAa6siqcngPmKYJhYqv3ZmQvxJ4SxzgOhhX6aJYKb9ckXHw4SLs%2Bd8NvQSB3a4FL6BQsrkT4wiU2pw40mVhNisycRWsAstQuOTZxGIt4FGth9z8xk06i47zWmdx4PaMWs1kVNnS1r4asjQIXFoBzlQ9T5757vQ09VRJFMhgMSsrqs7QMafl4cNpQ5HKBWJI6ccyKSpqYz8KdddZA4J%2B%2BLW95Eie3Gcwyx37fIW9rO939u9RnqIBsxRIW1K5%2BH9JeRz7dSSem4jnnJgE9x8p9%2FCSM6lR9WVqexckd4wrRgCPih2w%2F4E7k5EYM2SwPz1Sa1OXHV%2FA14pNnBQQgaxHpWbErCsyyPYl1aMm5Y%2BuNUKW18ndVCCcXQNnxu1nTOMP6nTnVSQPKnXNT%2Bn9nerOIwwgahDljQXhgNs%2B5v2Z931dLw9ebGOLbktr1Kqf4gpwbhUi8Z7qVfkZaXNCMvEg2%2F027mSv6U5fmj6QgnSmldar0wL4dCIyr4SQMMX15b4GOqUB8ErxVCjlMeICtTyL%2F%2BmcdpBZa0naojTEkiopHLya26B0OjcbImR3vtQw5ff7Z0IZQhGZnU7kdH%2Fsz87iJgxVeZXlZ39dx4gt2WTlRZhz6yH4eUl%2BWsiYGXa6VzKg2cZvytWb4Vb9bmitZEc0lob0JUaid%2BitIqYDvXE%2FTD%2FwMvnqhgHRzYo6LY7lu6Jd4AcRx%2Fa019b%2FqleAN12g5%2BzJdaqEh68T&X-Amz-Signature=e8020a699abec8a247363c57203c7ff5e8147da9aabba506b85bd433e45acb7d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJO7DCE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC2dzJnNnLgSYsXgK0QgANlMHFeWaut5C868qgkbN4kmAIhAN4K1%2BKybVU4lXG5ssOX7culYuln1wM13egkdr%2Bfa8ecKv8DCF8QABoMNjM3NDIzMTgzODA1IgwstABEXkToN%2BhCtdkq3ANbW7ftX66yUAv1Aa153glB6dCdVc%2FnDARNwTyRZM9MSXEg12bzQawzCxbf8loi6xQZ8YhvoSghBfWyO%2FynQGcZXYvkNxS3aBQpmg4S4duiI3NQy4yi6qIQE7Vp%2BLXERg4rbpVe99yDzxTrOsymi3JfwUmoeyUxA3ICZ9fqrP%2BEG3W%2B3%2FGN4lbqYRZwxPB%2B4yE1e99ROPgNCKscMRIP2Rq7CaYjvNWH5mC%2BONxZpQmqQEp07eSiDUDvPBik%2B5blAr39BpI1TOBFJNkosFeFJbr8FAYxUtzsWVXa%2Fjs0zuZlw8KLjjTTHblSko41ED9ATOSCKOmSyoXRZLtSIJm0HMLLKUKluyHChTaDG6TueaG39bMTb4vNhheCpdY34fMX7Ct0cBv%2FB2yRnSZHXeLNhxeV8iEcZbfc3KTJUtDH74SOtPaS89hYQkgurAW8plVkaBPbTqkhG%2FmwjKYIxDnqG6iS7ILXDnnj%2F7vEjndC%2B4fvz1SB9EJluu2PQ%2BTM4pQlvssJbmmAV0vMCCzARy7KSUIwSlx5%2BATtywhXPG8cLTVusFFt8O5%2FMCn1mAMi1Rf60wAWuh2VrQh46%2FK%2Fu3vRMsOeKl2D%2BFUSL4gdRcFuUqQ51TBB3tLlCNBKbkiWsDDL9uW%2BBjqkAbKdeUlVftjr7VqYRmc3AlUnJwkNN8zVC%2Be0tnIG%2B%2BReYM8VgwkKno%2BQ%2B%2BGeTfr4UvRRqy40wDCmPjGc865e9saEsSFUn%2FMfXDtsadr1xfo08KBsysPV4yPxUr1O%2FrgN%2B6YXV8VjzqC94f9481EW9zNdS2C0ykE0DZzZQCy3f9R1wF%2F4kb7l8lZR%2FV3qO%2BEOzkL%2BW8b2lODUWWmsgg3542Y%2FI1%2B6&X-Amz-Signature=bdc1949999f7f470692d45f3baca398392f26566c3e840a84db6459ede4d3cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXR2LDA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIADTieI4j%2BER26BDsQc8pFxa66vvVw8a%2FhPl01sdHYu8AiEAv0k0sOCrkDFhkj0%2Be%2Fbv33LD30e3GciRTIHPOg3zSS4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMWr%2BZuf49WoOJVk9yrcA4mh%2Bnz%2BG0VljsM2DQSe4kMMTzYx9Mi5FIii6vn%2FbUsEzSdRfHPeiHdFqfxKYY%2FMHQ51BYONVsZRTgWEZRBkHGv3%2Bw06ABu2fr%2B57ZBEsmSbzy0zo6fACNM%2BhmDgTSI3HG%2FmOd%2Fyf8%2BNQ50I4MzomtlAnBoqtDxR83BUQ3GHc37wf2Ps0SWIiqDbm0STsyCzfdm9z9l8p4dh7hy1c%2BvfcjXgPySDlZezZbli2t%2F5NHgK5h%2B1ppqbeNNgYMSrcY%2B4CDXfQQ%2FLG0YKiHOMAxMV%2B7Z40CMqrIXRQBROgfytX7XuwkRVHQJNIbTLlD8VLeI%2Be%2FqCs9HEx4JAcXvtvuUrSTwKk9d8h5LF5FlG1NrGQanvfU69q9cnkg220jW91%2BaZ0kkX84NQoeb6g6y81maF9bMnOKXSRwdprcOfXReba4FfW3m99Mqfj%2Bf2%2BMFRkCW%2Buqku81wP%2BJuao80HmJali%2FR6HAUqFyvAap5GS3aIyPzH7aBK34qbuOyDZSTNiFOduueSmhDG%2BAHNaZMjXL8JfVJTqmPSfxUDVtQbXnZUNy84R9kJux9POIpAjcWRK8Z55bukmh2V3N1TA7fyi%2Bif0FWCQtwRWm%2B81OfsgsPFN%2B9VNx%2Fq32Mj1CWx3YtlMM305b4GOqUBBOSIoG6uBYjAsBcoUzLDppaLjxRW%2FY6ZP5XFaGtahozFcDDneDFB4o%2FYUWJ0h%2B4k5UxlK57Q9IYsqlrM%2FjrSXVA1dk9Yj5TlGehUMIGOHdkFm2GkhSvikYiwCsaURbZmrofCmWEEUrLbapxk1Dq9zzWVrmkCbTK%2BO8XtOh2v5%2FzzFTWLez5%2BSPz7%2BLSgGDqtNUnzNKX%2F%2Fk%2BDB3CNlFlpkvhwR0XX&X-Amz-Signature=657679f36e9df433d35168389884ca7c4dd4ed0d18323eaea6d2b46ed04b85a5&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5MMKPO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T141011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIALJ2eCnlEqdmoqsUAgefS4xsN9j61NPVPiPCW6A808CAiBOBX3TCI5Jc6fC6Xh03oZQ2%2Fz1BFOCMEBByQNrDpvBPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMYxrl9%2Btd%2FASsIxx1KtwDPnKyMRRAws5JAAIxS1mo8Iq5sMj7%2FUXbi8v3s0ukKLOwyq14XPN6twESOGSGcEE4pFspMEZCf7dkJEV1QjDup1oGeTuWxgv4MNE0T8%2FZK4NdamqflZAHSL2P8brJ%2B%2B9QZeBL0LZRjgutzYTuYaeTHtihpjoM6nj2mCFLZ94equGr5Ofk9cUvmw%2F3GNNzyFzDa5EtSsiHYs7BPxQf18yitU%2FO54wgdWHeVF%2FFjEi5ruq9TqNAnVaGl2z%2BwfrLYqBkcMJEmGsiPdjdR4%2BXY6IruusqJKQSEuFco%2FaGJmXdF6iC4d1Bzg4oM%2BpzTDlZjUECvns3Ixl03kh8Tpj2%2FjGin69eh38OSY61M84ULbO0nfuGdrWeyp%2F%2BSECB7ezS1Dn%2BP3Yj3R5RMPbs03vPz8waA4qZORTv%2Flsefijr%2F7Su8gbdlPgGVIR5dS0r1TbKVt1B%2BHYFIhqWufVe9TAiHEAFIz0g8JaEiPVr%2FgFuBRSddSZbGoaQZ0%2BGs8IZI7CzuxhS%2FFyf%2BSSPE1KN%2FYNwAl%2F2oOj%2B6%2BTXK9ZbKcaoCpEhKveJU27ix3mFmMjDMieta7FkVt%2FrTHytj0RHo24S9DCt2zQDMA5%2FWylEQoE%2FytJgQ9tS8fUQTCbwtiYrvW8w2%2FTlvgY6pgEuns%2FrzzDP2fKYfOtw%2Bu1N1WWxua6iUYbZb8HuAo0x%2BtsaX4trPWOTTfrZg%2FOaUNMew01qTFkOr64q6bQ51jbJXWZlQx0ZmB241L5AvSKvgE3U%2BBIfdnhvGQKuRmOrTGEGJ7CF5LBEyVCRajCcd%2FdI69c96WbZLsM7XIpdUIMDzR6XXzexu4Phq5elIMladZTJ6GGkc11G0LRJguDIfwDLAe54%2Fai%2B&X-Amz-Signature=3abb3a3543f6ecf42abb199a7c354c7a392a5d6372574ee95bab31e9201d4a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

