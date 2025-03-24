# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXLHMNZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV9iCgdMHIGSb%2BGmwikaqynTMsji4BaghynmZve4pU7AiEAo3V%2BTIYISIkH3lWGS%2BR5qsi%2BDb2nUQ3P%2FBMbNKIleB4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV9lRBaDxDUeU7DCircA%2BuyqasYc4cveOcW%2Bk%2BjJEgzuRrwDYu4QglqFOWjHRPLtBYED%2Fh8pxTz2lGV3Ps6Iw7sIFe8Er%2FTbITwEgxngbkXK4Wx14KH%2FtzzcbUjhPeYFbAMttoNUl20QhgmNclXIUEEWG5Byw7TL5sgZMcL8JPtaDiN3kLJO0w13LnibI9pLOg4bCUfuSxVXutwRQx5Fv5yTGjGYuh8cj6UhyMrAsij7QOCXdzeB%2BFC4Jqqz5si79sYN5pUGfMnBGrj1HaQTWsT%2FpDlwcr%2F9LFu6EUD1kCZGJ%2FU1%2BQU3Apyd9dSwiJOjG2VI0PkT%2BUmCA%2B1Qc2OK8FKXUd%2BCErznEcYRm2UvsxzvQGcOBM3eyp8SLCeL5yiZnJkj7kAzi%2Bz8L9NoKzPHuXuN9A6RVCZ3FXLP0l7CrAmwrqh8owtvIHervv%2B0A7sT4mfZX6YwvyIIDMxXAeUxGa4Z2hdoZzuTi22%2BGSIsadaAERcbjgiTsvE3MPqNqC%2FNT%2F3Im39TiAQGJqNBDFh7MlN%2FcuhmpLyVvhLEZvdrWcTXnvZ7sHOvgy3sx8ozX3X7YwR59MxEqAYoyC4zB8yQB3aNXZtW%2BmU7yEGNm8bQEUTyziaVuS0uzn1if%2FJvED4vgNGTfwyAYw9KWEvMOq%2Bhb8GOqUBg91WEBxgesKFoy%2FTgnXEJE%2FQaI6pNwBQwO%2FcbHDdsDtrYmRAjFSzaWeMCfkHtbIdteddFDjgLNLbhZ5amu62Ok7a7znwF7oMAMgx9uSV7MEW0eXaZzDmhu3dVBS3rCFYiNdZIhJ8YWH04ikCFaeK10%2Bh72TKHboyfD1y31T%2FdkEIfD3DhIgsvl4Kkt0VQQbH3U8ZFnynxU8v1FpjAP%2BmDjpDUOa2&X-Amz-Signature=9e69cb46d82d321d7217854080fbf1f163ae174e6c9c06fabd9353fb70383d17&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLQIFIV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA7tO3yybZqX2QKK7TnwqmnKsDY4h3J%2BdgwQunfiRIJAiEA19xu1Tiv0x1Cfc3IDgwXQPEwS9ByMTztIyUR0BvJZ8QqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0srBK%2FAzQIi4Dw%2BCrcA64bqx4j8utj5lEHjlANATsWDSmwl4r2Pwb0%2FZbgRu68cWizkTE3DBi9x6HsLTBhR%2B8wsYTQp1YsbbDJ0Fz1%2BaCasQUyVVyoVtohlv1EZ4kgz6r%2BFv5xqBnsHdzbLB2DJYftpXTDdnDYXAxuBoyQSZkHNEzpMRmQESSQXYmejAvwbOZalAIR9KRbRXKL9aHEhYX4NDkqBtyRMdGmmcMnB7y5YWrMadnPWF3ub4XaGNM29NrTgV5AfCz%2Fe2zTwlxogZdz3uNiaVEk97xGkwedRF0%2BhexCRolIF3GQ0RYtlHwU%2FvdxhLNt%2BmTm5Wi%2F9n0vBeK8hXfydM0D65jG4B%2FsVEUMQVAEZhRWTAoPS1MJWSytNLWoeg3O3iyYf51jLLGlR5xCKtGoCs4YFIE9zGA8IS2%2FjmzTIcKG7u%2Fr5y1%2FeuCuWn7xJvhmghjX%2BChLJNJ%2FWgvEK3Dd%2BPqg0Yut%2Fymhz7bLu2MRxwGNSNwfQPe%2BPJnIaD2cqjojcc06X2Fzhr7Ade%2BDZZ5ijhbvJrD5nN%2BwCOtVap1wtliObV24BIjq9jz1GaHGJb77by9KxycYBaFY4XBMo1rcb36AG6UI%2BJH%2BEn75X1DXsuNBWQGrYCk2hF9UJDud%2Bu93ym2K%2FKDXMKTAhb8GOqUBsa4b%2F4UIjejdqfz%2BKRNHy8UtCBvQRHnoOVV3cwIwnZkE0ZAlOI%2B%2FEpSp%2BULmrG4HU4Hxq1l%2FkBF2vxtxkWsYGB1Mhr608tTeI88LrzCWAnlIMVrJzbaYYpd7o9uk0z9Hy1bmZlzvR9R%2FrxSatJ2yKEkQ9DslcpjcsNIQH6I1UomqsUPMRo01nJ3kM1slopMpxgvcf1fcIU9EiUrlwtKKASIdiB5M&X-Amz-Signature=afea2979e90362d266ea3fa1684f0328c2624eea5d209b96a304c3a870fe72fa&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUTV33D%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhaYx%2F9xkPQb5XsrX1DVNtJV6cSjO70%2B1ufsCxOowMKAiEAtbPaf4UsZtewOakARHq4aYl4zrUz9DkqvEkNM4%2BAjB8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1cldi1Ta2BxJsVwCrcAzbtmS2SEA2gc0l6TZVZbVbJoNFWia2c7uGMfOtrEdYvkR60IcHz6MbsKocIYw5vvWMyl5lhnLlvMuA1xodBqbrEsOO4jXDnG4OqMwZDJYCgnnyjx2W8qt7PtjuXeezy93r7HYt8A1ArmkTBhaOCY9tPEdX2F31Gq2l4UedMEDv5ETLIsuMImJ2Lhxkb%2FB9RgUKEyI59s9INU4ru7FT4bxhinsaMeYSBJbtS69fPJ8sE%2B%2B3PY6QjPMzAmeZRRAKEKpxk52jBZWcsl3L1W3SBhKdxlyscn1bfKSpxWCIt94c3QYnfjV0BmxZHwvb5TdmCfXuBQyS2HlZwjnpK602ZAvIcsKC7lXlPFZopZ9yQQPN3cYzOODv3rqoaDj%2Bj6kgWbjcHE%2FhnRps5fErdrhlJsDw0U2vXF98u%2BegH6DCp5aT%2FBV%2FOyqt9TgZogjlwEcq4S4RhnoujeVz1lf%2FycvNZYTU1YAdnuApzq2%2B8hByBCNEjWA7KirBzcxrLE1JL%2B7HXm4RMDcX5tPIopmruNcUQkGE4QTe5bmz3gQ1hLUE8aDjtEbZnS16LW6FhGumUzLy1Qg15cQ8ZtuZIwPxx36yv0Ek4nsMbe1VjQ5u6EPShpJ4MPsZei%2B461rG8rfH5MKO%2Fhb8GOqUByVLZOL3aboXJ5EGBziyOXEKWPxcRmBahyEpTaO89OJjKC7EF95vbz1pgiTgTJQj2WJyqcYy%2F3zv%2BqhleqIGN8jRwTuCcsSCpC5YPhNYeBASYY3V3PNup8w%2FZY%2FzdjoUSNSi6YIxMWuE4M4CQ4w2Xr7T78VgdI8mjbBTLuy4OwR79z404%2BQJ%2FVxjBSRGHKkUVUhfr1yYP9AEpQDJXjwzj7YgpRczQ&X-Amz-Signature=8b6f53b06bb33a6fd2b707605101325ab6845c47b85f60d88645af60f41eec87&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPM5EJ5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhrompof9OT890mOmYf07ng7XzW%2By5uo50xcPCnUkEAAiAcTgQbwX2Iado%2F4dTA2z9NksscO5WqhZ%2F31Zx5MxV01yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmdtqIJWv7kPbwMYKtwDMOy%2FAYq62L82PLmRsSYItwAYBXKoBp2kR1enCGlnnvXxovRqa0bEaaIoYYFDiAqsv2Fdqqr3mcZjJTlDlC7v4uwEWRF4HtaO82z5qiKcHe5nzMHc%2BMi5YvQCozZKglNpZhi7RirVe1Qj6sCl95s6iO9YP1uQTGzSZ2cvE9e8gTOZNnOB%2FacxaRwS9WOB7I37DhNEQx1h6EBpLmjixfTDMnyafzhDjY6f5oaC0UbxmGGB6QZru9sX5Vv8xobB9HReAgdNravQeDo1e4D9D9oBj%2BujNJ4sGYL2ZRelNb32xxi%2BEaMr4oOzxkhWMDKToM1FuLmI5nD%2FxexitDVWFtgLxCyTohdlu1vYdPeQ0ffY2eyLfuUutFAKG3%2FeEPd5lhnjhuak8DMP8J34tJvEKfsL%2FDbl1HmK%2BIQHgKTxkCnP8WhLnRtSpOGjVVR6aRXpCJY5bT7w%2FS8e4IJq%2BSK4tHl6mm3bUriWIT%2BIq7F0XrO05RqTp%2B4uBUOHmPl58pdDAzTK3vlczlTe17PO9Fk6uUsHkMF5qm%2Bk0SAj81%2FiibZtF2b9Df6yX5zgNORF%2FgzVnaBzlJdr%2FGzYE0uAAWvyzT1Bhq4K%2Blf0bBE7vxTXQ3lID2DlMGFAv9EnUuYNAl0wqr%2BFvwY6pgG0l5ng%2FRsGHQG2%2BKgiSmnWXMyuU3JXidzO4DPyAdIx1AcssWB%2FqU0WTlueiCWbwWS%2FroUGFpR%2BqjUX6X1qW55dvJWdMiOn97bb8R1EiqC0nHWBofS1vGmcJD7gjqzd5tuPnxRQUh3906dL9hmZZPLrL9vSR8s7gw72sFTUbKDY3u3sdF8SS1G3uVsXwJZcqS5hfLQx1IAWx3McdRAlFxnjDN%2F26qP6&X-Amz-Signature=3effd38ef1117db6ea4e0a792ceac295e6c8831d74b015d1d35748e1e687eccc&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QS64UDP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQN33Ab2X3v4o%2BQ9e7d2Zm%2BSHSRE5Vd9pMcuQpcfIGhAIhAOLgY8BQMPeKj1zNdfpm82qA8Q7p006TbW81LYYGQuaJKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSkqZ2qzgdqXCCS0oq3ANpgMCLm6qRwj2OQBYH1y2Z30f6hE32OqB%2FQlDkmpF9PXow8BG5qSVOPvS9%2BtxTCIW4eaY7gMLZ3kBhABCRCSVVJMiyP3O%2FAJc%2BzSsgrSsMcWJhVfDzCBmu%2BUh3iyd4qHXtR2WqJ9sHzpbTrt0DHkB7qjoIEsNXsKDy%2B8xP9Xd4VWSDGwJ7L%2FdbpmdDtbY8XBw7583m7omYj1r8jKrKEiCMGDs93dziYWpKVA8370VQeKhcyLZUXlNZtFH4oO9K86KiGvGXvLmlmfdaIpL5K5G5DF3RqIwYMzLIxQtUgCO7eWki67HW76F%2FnVz1Gd8xvAkTMPn6cj%2Ft7N%2FnIf6Cf7vZc%2FdPL6MKAWRFgYruTbzByR4U2IkpjCf8B%2B4EWYp%2FI83n%2F%2BUBPicncZPnhkcVugEOy1NjUUH7YO1P7MF8G3f0raqgZXL5KxWPd%2FxSYI46Vf6zhoiRfQ6pNeBPp%2FYEBh73lrLUNJz8c5fdyaSLqgz7T67pNwUiDJrErO%2F4iCWecLeNg96PYcuUvGkeq22SNkts%2B6PrvX%2BVEQ9uxLLGnRFNF7BAzm4i0tIkpRQ1lAZPvsKeJAoTTpZTRNMTzgW6A7JRc0fn3oNFmezHMFgDS5W%2Fd8V1PRtcG%2BiJk3kMmjD3voW%2FBjqkAX5DnEz50LXEgjjosn2ZtUWSM2cUL6QfsYbCSm2ndICLdkuue8m3U6zKJl21bPJ6uDAKt65nJuKztFiI2frakdZtyILuGTBseVvRlE7gnMsNPowrPMhR3bI2bsctwlMtSnErJ4Cljy6vqsndeq0SNZed1s8E82QcCqc7m%2FGuVEC9aFZjgACI9S6mDqPb2KtGMzC%2FP0MgxE%2BDI6hcs6mcRoDZ09My&X-Amz-Signature=f0b607a2e089161d5618e0cceb1a34549e3c402bf3ab3437c09736f9e3246a70&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIPR24Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4HZdYVsSBIWVLdBevfDQDEXVOrGgTmZqZ9yhyHHB4LAiEA1WttsFJ3GCbfseOe%2FzVWIfNvNH5%2BPPqLbD%2B8%2FsBmHEgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5fJdkUztOMUfwA8yrcA9zsjs67clE1nu70GNqXeJSDBOaVhv1Za1FRlSbNKMsoeAIrHo98mDv2WRvbf9LL1PsbSpTeyIlFxCkK%2BGEbH%2BWzNh7ebcIEC2DzJCot24Q%2F0nwKTedsL3%2FCXtNUCcJnyl5kb8WvS3zKa7FMILChQIPxlpiVZBPM3%2BV62FRJZalWbME4jYqtKIEy48%2FG8EI9zeO8uC8cwLtBUlGKtsipeAkWG7mUEcLqv8OjLcj%2FkQEnXjHrUhpN1ggIvxKbbbe%2BjJkU2HJMp%2BxQTJUESzCn%2FeF1avJolsit3RvD4W6Vfq%2B4quhLB35GGss9Kko3OaBbnKalk%2B9ReKF7sP2KKTXVUYyHiRGEmHqZzsChbYh67sQ2jRkoXemXZjOeSelREW%2FRCKTQ%2Fct9LqLvmlfKzxSRJYVeYlzcA6ZkOtR1KABDiWEYRBRDLLShzRRu2oAGicqYsTlI1wGrikAwWAJrbVa2RaNoBbSNEEsB2Uy5bmRCppCBJm4IpSJzia%2BQQ7RHHHhVCZPzN%2Fj8hnDb8RtPRnxpWH7AhmLaCIP2BGmFz6D2g%2BN82%2BrIAnNZoXUu8LCR1cncAG3uC1pnHDFdOADwLppKh1CfrzEwg0FiEafoUi52UCJD3tBvlyrB6ZC%2BtixqMNO%2Bhb8GOqUBpSYPQXDV8FElGYzLGGWShunvo5YwbnBuDjK8UZrOs7Ta7p51OvW8Zc0Bu1wXYIX7uwkLW2EGsCNwyY9hVP98FADfg2a41H92Eu%2BxLaKGFHihkBpFf8gA3fC2W4%2B4nZ%2BMCuo7jowOyAFYHg7CPOUIZ9UjdMgW8GuNx38KTtBR3NTEGdU6PrMueTJWAzwac%2BsJlRtyZNqXecjaxMDvyZQqE2h5odqU&X-Amz-Signature=1e10765784c05542eca5421ae33548fca48b5f0e4a7a2257228ec1c28b6bf82c&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTNFDEJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5g%2BzCoMhMxHVhQX8phBRMMg52nSNNSRglixM58SvG1QIhAJ55jqOc5W%2BV4%2BrToIbvu7pIlzZcTECanPW4jMJ2REJFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzccW99375iykS%2F1xAq3AOry6%2Bwmb0lN8t%2BqQtiuSV%2Ffbpf%2BNusOk2%2Bv157S97ik6%2BgNKSb%2Ff26iIh8mBN%2BA6UTXWk4JUidqorJ4zisFXp1CtoQc2%2Br3WaXOW%2Bk0WAAj1b7NOtwITWpOIeJrz3A0%2B2doUPVIDXLlVJHhmDFj7nna7dcF8Z12rlABF5WjYAWuePWthGaC3KT63sdqoX6ukNTZbH5yjGTgGrBtu2PSrPuIIIZCw%2FsX2FTGEi%2FHeml3QVP%2Bz%2B363bovEFkD5pUrrmjsfKBq7FI2AiDmKxCvL%2FQKodNZ4jw44M%2F2UNDw8BVNXr%2F5Wrr2JvEWdQtyUsRTyF%2BZYoO4p0rvOxga4psy1J7Ml4uh5VKj0s9QOl1l%2BNR65zXqLYx2FyQDkSUtg8Sxnawhaprd2Df9O95FoSvcvIUW2l6wKqz3kDZ4mBt6E2Eiqx2fFkwbEfmNYdYZUdk5eAtGHD6s%2BKVTYvXQ3kQMZkyKp2cu%2BRN%2FiKbuFQWDE87rdI%2B8n%2Bp8zdj9iXi1hmO1E6uiOIcfPJUyaUosoYmS6yxe9yY6ihx1RYN37x7kvHH3AdmmyAT6Avi0wuyQKcWXuNM%2Flz5qBuD5wteS4Y4PCmh4Pd7HEbf4rD98JjnJhjEhhTympwSUfGXoDGUWzDfv4W%2FBjqkAUVp35CEFQgeBCRzyTFOBQf%2FLFwy1mMGIAGJP%2F%2B9fJrNh6p1JlFFjNaZ%2BVS5jaiKK8G522LmprC%2BS6pJPEviQZS7%2BVJEiTWNzUsSgo0kDwcYMnJy4%2Fn3J7gK%2Fj1ibWQgM5Lit7QoZ1vMyHJ43CyGk5UGYUV1lkTVkQQrGq%2F6%2FF7qyFejhDKT%2F9ZcD%2BNe8IigNLuiP%2BnC9nNYUin0MOcG2QCGpi6O&X-Amz-Signature=132a1647fe59e1387f8580bcac0c6da909b09e06498c24f9a1cab73dcc823c49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QITW75X%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHZEdD4BmOzL0L07pgtTLQI8%2BBgihEqb5jpNC2E1DWqgIgAKqcSRocZJW6yqh64P3TITSykRloEVDzBHeStkemq24qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ6HJaQRGhFG%2FrueSrcA9ySmARi0JsLrqqt%2Ftdx7pMLB8ICWZd3cx0HNf5kUboyrMJgup9X2i%2B5FihnLMCvJn7%2FIk9RoQGmbjEl2DhUSkYzPRHHxJz6dtPoifqffYDnVP3npIsLSKEpot8tkc%2FNudYSn6OSP8iyGK6r%2F4z912iPkmYU3R5suLEXO8LSWHHBerU6nOSJVVjuop9rUxQVacQq3jVDcft8y2yQ0W7fDKbJtme3tnYFv5Ris2gw9fS6Bkt3sFCQRRo8rHsaTqOrXJWPdA4daRm3HW3P0EUJ6xLYEmek608z%2FvnyFLg%2F2bCDdOMNpcaOEAMIlgqSrhvmV0VDzdbvacp1LHdyDlu2WrjjsTOc42O5tJc9t5Z516fgUSsyEYwXU4oJoOycKCTkxt4XLbqLAlPouNBNOY%2FDMiyXu8dD%2BPidaSydtylU7S%2BsfWQrnvKnZoDeVxI%2BJ7ux02X0kk%2BMiABRkhSUYIfU5wXVqHVCFm9KeKEbcyUpufP9t4pCrNXFW2dP156l8wfZoI0Gwpk0E6uRlwawPqVrRGrX%2BZBQaq4V7nrIm7TVUcRR2Kgzb2qe2uld1IeaBCRCxoihvarGmY2Axj9R9wbtaAd%2BdAcv2DZpmQJI6WrviLR0I%2FX7ojmjYpMFe9O4MNi%2Fhb8GOqUB0%2B%2FxeAPU5mDIrVDojtOZ6XK59We5GPSvcMwDba8X9z2Sn6aktgelg6F9%2FmDizvrAnjPzgeq6D4%2Bf7x%2Fl1qeu8yu0lMpXbZmtHHQE%2FF3OTvgIxZNpY6bSbc4wBxatuhN3VaV3W%2Bgxc47mr%2BqmJXCHDiliMsquROrWc1iPlhe4eiiQUkZFHNcpZ1%2B5rVVmvc8cu%2FVT%2FzGGLazrzM4JW2fq8bzaH%2Fze&X-Amz-Signature=fb2f07bad86dbb900a8018e2c2982d27899acce8241d951ab0e0e85a8487811f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNR3REDY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqhwFV%2BPKMD7Mrd2O27uB03c6eO9YqucxnSbWgS3XBAiEAlKjKW5LJFH5vidfrEg1Rz%2Flm8JgSXldHpSyeF%2F8b3SsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoir8Q7IRu3ubMX5yrcAwFuT4ZFpEV5Pmw%2FC3oZvRXbL30Yjtrd0zEkuXMiTWzb5klTP3ungcNAsMRZx%2Bg%2FmWFNkur1%2B9o6ErbX2gKz3fZbq6yao0n8ichclUKmdd33n2RpR9Omwe%2BMQIxwLH18FV53Ih4yX6DCLapc%2BPZVOUw4fmnDvL5NDJ%2BWM5C%2BkeUPKoac2u8cCulQZ30ohJD7Mc1c1FyPOO%2F8u6mFw8e1vT36Hl6NLh%2F%2FuPu54J3xBqvSW5kguPFcmIZjABG7DzYxVygB1jnw1Xzr7%2F2PYqBghzlC0VlFH41lHToob%2FjgswH8bTv%2FMXon9rV4bY%2BfKBTpIlHooBBuMVZgVUH0LR1yzzoqTVdMXG2Z2k8DRR8bly6%2FyTKE7F5tCssiQymVjX1U42cO1oXCK9W4J8oym6xOezXd1n%2FmP5pZjJD%2BNdXjp8mHSXEAskoOExfKFU%2BU%2BZn%2BU%2Ff3IELMZJ99op6nIpBOGnGvmNRGJw2y41l9kW%2FmqVVhdt3QKod7m7ztmrt5hRZjzYmkE5ak62IYT1Vzxj292QPe%2BqCpd5elIDLX9PAOl7XREbauA94yrvMDX%2FyDGJKuI%2BUSZmTBOQ4IvxGVIW6Dj4qztShgb2N84c%2BV5IOWIVB0rK8W23wN2AnWhsXOMNu%2Bhb8GOqUB%2FV228pRQ6ZFVv2J9%2Byo%2F4tGgo4316DTRMobqKkoq5sDjnVRq%2FbM%2BPC4AElij8NvKTOUXVvYPDz%2B1ckxpIfGbVsZWzcFXfYp6F4Liga0LcKQDLu%2FyoOQvT8xZs1EP7CaUSnQYWvSFrDyWhRYUH2iRjEh0%2Fn72%2BBE1s79mJ4hmD2aUbXZZSO2rUaitEJhAg3JliiqWopCuX4%2B4NLLrVFrVkSvF3bKN&X-Amz-Signature=a3c294ed1c82b34c0d1456baf435d8f239f1abfe0489b5cfbbc3e022a8d00d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

