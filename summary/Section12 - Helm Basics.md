# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LX33MWS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDB%2F%2BR5bu4bt3YzOZ7ab7v0Rqv3UPJxhkV%2FrPbctbYmowIhANJRllTXeDXq0oopJuy68mvtDCNgsRh3NbFZoIBZXyuBKv8DCHcQABoMNjM3NDIzMTgzODA1Igx0pZngqAnEUVnYu44q3AO31gpxNVjC%2BycLZzRouwUj0oQGd3GQssOYTcqdUMt979PR1j02K%2FCiwHL%2FVdHnvpvgJZxr3%2BF3bodfIA1y%2FsqAsrO%2FjPbvjV0r3VaJwjM8igXz6MhhiwoKl0klfgPZNs%2BAUPnce%2FGhCkC829ZxhIyb%2Bnc4YUxbmwVOQoHt6QNawsjAKLlsBWMid%2BuJ38XyX%2FqcjPv3D0R5JA80tK03nCFNgDA1cmLOPHdh8Iy%2FQA%2Fgl8XdkWwgqyK0LNWaG02sJE%2BDEhwdGf0fcq93sraKeFcOpMwneUn2LU3mZ7hmlSsZPp5svMCHKr42bGwxvbg4fCQ2ULR%2FSUxv8ZqHmZb0LlR5QUNigXG5jVjOSp5zUHuVC7wIylhYQ53Gw%2BYh3NR2xkJbHVT2lZQ4Tn4USYasW6E5o4Cz0hcadunUEsp1W7WDe0UjdZ0R4l7LIkeZbfzwVevDZ5tNQMvrzHtVYXLSESIdSKDPemQcZdkWydI5hPy1FoD5y5QqJoJwqWo7wrBNkP0V8R5lhdrQLnBRXiWLHXWWTWmG5leDJqVWsMVDLPojCF%2FbiHSS%2FhWOoYvKf8eOejTdn4oXSJi4iTk9vLDsOiERT5BpRb3oxWiwLVy72jSUBtpX2JN044vEy%2BCAAzC5neu%2BBjqkAWPTU4X6vAOjYG4CzhPYtI0zWSG75SDQWWzvwjFR0oWwoHy3bpMqT1mRV%2BYdRfHo1CRn8MjodXHovSR%2FkqSG0wCkK15c1UShqZ8hIzqfiONMuLoMh5ZezlBYxgYJHLQ2DE8t8WriizisBBnM8zQuNR%2BtOQhMzbfFIpwT6QwX2NUkBeQFe3miQmndusyqILD7BmwDuwHaEa8P7DOYUjbt%2FiLhDo3K&X-Amz-Signature=9642a0a4769e85263daf9c3c204789de3390d1f1a8ea7c7ff11fbf80b0cd2565&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRB4WOO2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBewqS59%2F6qB6txgxVoDmqqiNi%2BA%2F0raMVpCkZtmgT09AiEA5rIj98eW5phTD0a1Jl7Fw6AVLa9c08KnMRMO9zgoLhIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDChMjs1XDXAv7DtSOircAzryGHnawWrZwcl7ruCj6LGRBxN6%2BKQ7RgpdfMVeFWFk%2BzQEuYr4rkcCXp%2FlWVt9n4G1NyHKUb7W0h8e28FwkoRWG0ToSWcoUDS%2Bfj7m67NoUhlyHdHTMSQC8qqZibi%2BoViG2Sad%2FPIJOQuVwQgl7bU3bzLVsYnRB%2FeSD5q4%2FyLLsIejJ6fpID7getiFIH0iM8vkZ4M5VbnnUhdbCpBljGq8CQD1OQQ%2FeZSqYzXr32W3ST%2BOZcN9Ru9m1TExKeFmQiNfsquyzLhl2%2BfLRXNv5icWSO20taSi2c3PtKljPD3g1O8afdqG2WgvIMYNc9%2FupPiRYPEg3iTweE8IJk%2BrZVHHz9Z7cZMwrKzbXYlNd1IEBoX%2F9FQaVCFBr%2B%2F%2BcOq5pbmUEtFpC67jc1UYwj0W0l6%2BiU9McwE2Wluqh67HoOscNuKjstvYASDZgBPaO76Sc0sYO6bBEWz%2Fd0GStE2wHKxZlwDNWNPDgGXNd8sg1i8SjRIpxutrXtbjfYM0rZ8VYCmGA%2BITZ4pE2GZz%2FY5lKzW8EBwu27N3JfKSamtsBRcBTtyItBGjy%2FpjoqHDosQeYDIf4suSZGWxpQQrOrcpn9XNsvITrOOJzKp4kCbrQe0Rs%2BpuC9D9OtifPRBLMLud674GOqUBkDcBn9fBJWkDylP5aH5qCfzFrZCjOxpVfAibEPQuWEmSbGGGE%2B45O4xeY1FRaB6InU0XN2YfyAb28Ul%2BTwccUixFplGus42DKu%2BApUA2sLo91OdfWp9IphYV4K2QJZHQkJ6uDE%2BLaVDdPG9mxabDO%2FnnMqPVRorzOWw4iFH%2FyNlHu564UuW%2Fn%2F59QmOzdoJryYMgJtHvaS4%2BdUrFehh3WgP9doIM&X-Amz-Signature=586e7c05c999b7ba626a5737f322d034e53849461f6171c3111c239e6d982741&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYVRWIEN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDRYOMQ2amIviG312Jf2kzU60WCbp9AU%2Ffyvxi7GDQbuwIgN879RheVtYmrPSKaddVtG6stNU9zoj1EK%2FYSnrc0qosq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPxdswaY5S8YbX9F6SrcA4eJIZ6ZcIc2GgI1WG3dQhnvH8bTzQYMzO1VhtW2jAzi0%2F6k0wwrPP8r2g3nc%2FW4xIsGhY%2Frz4rrheQUx6xxTwf%2F%2Bm6GmzQxEX2OqYec4QjNVooxQOOSAD8bG8orY0e98PTWdEL2LQs3oWRLdjPLWNx2PPNdpLdHgCOJqy5toAEmvKVYS3j2J%2F%2B0JcTpLAYpe7TPuLOFHAUNZoBoSMmlKRlGnH%2FTtMrIUEY%2BqhaxSsysd4VuIVY6n%2Fhu9bis94wSRiyw8ulDoUo7qSEui5eRo9vLC7DV6%2Fb3LwhhVepyVJVCL3uwhQSfQmHEr7x8Dp3KlDs%2Bzz2KCvPNNbgbyKRrHyqC1o%2BbWHQrfYlz7%2FO2ASeyMkHeDn%2BquXapgWj%2Brf8BK%2Bf7W4ugJEsI9IBiHrxdEuvCH96OGuMVDHqYtrTkli4F3%2FSjrUQdne%2FPxs6cijuKhflx0Qiq4J5tmTNvWKdgO3ujm4wXjjsl3tfDbuXmnXCBPuk8uB1HiTQY5DcI22n2NFH%2FTYrNtjfswI7R3X%2B5IDaceHinxHWFGW70Mc%2BRWJ8aX3JvFesO8i9MBs%2F4LBpDYLkX1CHliovX0ec0ue4RYyHinSutXWwCv4i9m0tn5WfbbX77A9MmWD9%2FTQr6MPed674GOqUBFL5A4UNrT8xtJNNh%2B0b7B%2BF8xlX0A7t9Cwg8M8CEWgOrr4vZUsn5admCp6cx0WBYwpvTl5aWwUa8zGIXBVbLtAwvwaVo925%2F3X8EYXTMzZqnOT5vgjj%2FJdIJLL7w7kGuND7%2F6Rb6GifBz0dKJDNFBA3NsQVd%2F%2FctGTIxq7sGXlOPin5h1fpYBK2DKKuFAJSYSwTHRTjrZit1cIIm9ncE%2B4fIx%2Bai&X-Amz-Signature=8ddf05529f6c23ad7fbeba877835c56ce7b2171337a8623c1eb77176515abca9&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQRSNJX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0eZOPKHv%2FIy3Umx4%2BqPmldEGoXH8NBQf4k3D8czaMoAIhAOrlbejj1ZvZBViJ%2B4QpBscR5HqT2SwvyLTUl0wOPwLqKv8DCHcQABoMNjM3NDIzMTgzODA1Igyk3JIrbXXcKlq8I%2Foq3AM0dqfjyosGLnKxf%2FRxtzysopkBs8AHJn%2FAdoBtO%2BRYir4ALScOt1rvnWrdIcOuZFTdm5QRtfICbc5vNqYmW2RXfjrfGnr81CUM6M5Zwj7%2BmF7AED8xA1nGhjbDIn6idx%2FAOjYhpPahkDbfjngO5TKDIELeYIbpjgy0h6pf0oZ661l0%2BTUxk6fb8DpjFXVoZgZbCwG7ek%2FUdR%2BGTHAD5Nj6RDEwYn7dcJQHYCu%2F54p%2B2t4zBRjw%2FBhdPCTK19uXimv%2FNR3lVm03%2Bm%2FX4J3hQJCHYabBAemDK9B%2BrmSmeTTLhyDKVOnWZcBklrMSdIeBzfp36%2BZ3MVx52%2Bt0AD%2FzrzTaIA9OXCoLjuCTL8VVLizggTTV5tGqKYfZoruTTklh7FjHNvdDVeuULlhhd28GRKOPxN5bUU%2FhwjJDb%2FFwpR4x755KkaqoCXpAAmEKQ79I%2B18Ut84ksfGGgKemuaWFIVCsKLdPP9DnsZ0pIw%2BBjn5RDy3NQ95pYVgAzQTsB22CWwDfJEjXBwrROjsv8zeYahZEAcJv0OzRvdxrBO7ePRmJMO2cuyGryvR14x%2BVQ1xJ5fo67yJ%2BNw2maP8rhuEl75hvtmffq37HPlggQ%2FKJAoEklo5t4X6ibJ%2B68D34bjDoneu%2BBjqkAdgTwnRQkp%2FUscKmR6ZKsOuQREvCrZg341PT3RQFPIPreAyfJJKZZpYAEJpzbExpgLry1ZGGfcMYmyyid2FV5b42gmzh7ZuliwuHRH75NKOl9hNCpJmsvedG7Y5c%2BYKNheTqBbScFIx3lz%2BuNELUhCvvL0c1yR9QrG4d8AR8XON0sJVVEMzN1NTFFNwWuBmKrP35VJH6wnm8LKuWviC7x%2BZuuyoO&X-Amz-Signature=cfb171d35c0779b5c1493bb6950ac802745d1a456c23e215125eb8d0dfa0dde8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TEM6VV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHutwS8CEuqdmDpE%2FcFnsgGS%2FMluOuX70b1TLeTj2seOAiEAokxnPmUJREKZ7ys9cDBagWAoL2vnuNGivUNRJ4FZ8YYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIKuM%2Fm%2BIxQmHnPuCCrcAxVrcp1VBXHHyzrgIFja0%2B6MYhAJ%2Be%2F6ouWH5jj6I96glYbg%2FZ5I1njOnQqQj9ZV%2Fc9L8zrwt60D7gIzvH6lxmynSN2ZNF9sZ4MdLF3%2Fo5qZyCt83EaxVCfsj%2FK%2BDKWxNSCQ9KMmAmN4wbcdXiIdLhAgHeZxML6oZhkx%2BFOVd7bB7cXdE9IoS0SXbss06dioujVyQD3sz63iY%2FRGzDpF7lEuFf1OJyMzt4OUjoF9im5kunZriVpUU3NSJ%2BUhq2Rw9xWb5AsFF1Zm2gzgerytiFKy2trV7MwNVLkLViERKgIKfTnizT%2F%2FnFlMKJmGGFj90Wx0ctFIed1eKNecVszh%2F5ibrmXt6MA1T2F5P0OPdazrHUknXCjyTDx1h31i0I5rdENN1ZxQLCJ%2BuHsxWsQGLaKpWBY6K6Nj56RMYF%2BNEix1%2BaIwHxDm6nafJcTinejvee8cLSPCilrgC9E6tCR9zOkw75NBeT6vSLITk0FYkkBOhcKtmDZdV8G3fV49wpQTTpUuMTzVLKEhHuqz%2BtchDWxzN4sYPfB7WzD6sv5CFwB%2BpaZmGZILCrrZe7mdRFvthBD7sndFP%2F%2Fun2L5ErOp4Lki%2F%2B70471BOYgM5AVHchOGXpmkhWzOYuInPxsbMOud674GOqUBWEnba6LkH95cfhHJEsYwJsbxQZCW8Gdd4XRkObpiRZrE4nGxVHlHhPO2JrgTferjcuJCP0Ia1QBNfSvakTDhx4lC8KHQGZsKtTuoEJqbOdfDdqmEAaSns5LC6bRFYzQjB%2FdnLa5DnaPPHgGNvQrrC0mU1BitBS5AHtnElL3YRR0AnPz2R654y3IeURlNIl4XPxw%2BFmCA428Kaouf9pwv4CQFXruf&X-Amz-Signature=b5e4abaf22ccffeeea1a8c962ac01fea5da6aca901ddf1dfd1e4b3d10721d39e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGAUM2E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE9OtJ2QDrtCKFXtiXz9eSuc2qvhxr7QN%2FW4exRhcn9VAiEA2nux3vIy9bqC32fBZq6eYTOP01VJNZLWByy67W4lPOUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEnARBDvUaTtZsVW%2BircA7DblBURGcp%2Faou59xC%2FL3VG%2B%2FlxdY%2F9vabvWRtpu6%2BwHczdsS0vjyd6%2BF67VBDF%2BlqPYjPD6mXTFdxM8ydmb6oP1OZdxyAwaZro3euHB8tqgKyn7wmkDgoHyEO1bqoHQy%2Bm7u2xK5TjkX2CNzhMc3N07woTckT7%2FdOguqY0tQNRTsRTYQiMFMjgSKFsVPf06pnp8sI%2F3G7WSX%2FxjW1Lvz8QaZoCL9Dcij5PY7Rj%2FRnt9dxTirTfKZ9aQOHEZGsYuik9qUmAnjRu9l2Lzd614fJAdNJElpG%2B1RryAGXj7iKYe14xK8Zh6AK5JdjqeoO%2F74nMrYB3ZUbk1I8S%2BulbaTw5B%2B4q8DwCEr%2FHHcEA447sIe7Y0U%2BpgYHJsZl1UPD%2F0WwOwOdLnuY2IwG8Q1FJz15qvF3vSbMSb%2BTuEThOQf3mwPePO8n1K35FZDbAhhKkWb12IMt4wS3p6%2FjuKMTev8TWwL37ZkyjBqcg6I5InAYSLHjyRRkHTALwfqGPBhcIivTNb%2B7JgWWYZqevVbLbhYi3TjJRUv0pQBPTPv3xspKMHrv7d%2F1BcDR0rtKAs6louK8pHopuYBy4GVT3GLVmWqW8UinsQ1sNJ%2FyyRaO11JfJQkyx0RGLY3OQDy9gMJue674GOqUBFZUqhGYOfnvBIycOWpjjVbzqvtT5DSel3i0qEA5HXyuaP8ri8E9jETftqgaxJOyz%2FhibzZjPMjsQZyYsLZb7vDJn4DPyB4dJdU469G4YUAOt1OiUW2azWK1MWVDIrIS6m%2Ba5qmJV0EayYj%2FmlH%2B0Uj6Ws%2BB56rOQvmeVnajjKAJTVSbPniq2fkd8gFnvHHeHtA4Wd524MEqSfoY87lKdDW1RcZdV&X-Amz-Signature=402d9b47078420fb1ddbfd5b718724149a1a207937909c59e2d61862597a767c&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGMYNLP%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICoUV0xCJ%2B%2F%2Bc%2FaSo0ZvqR2o9I4ZNuVt7pRkwQ8K9fVOAiEAqethOJJ9XSpJ7AL2ujtDfhRAZoxphuKX7rgcMxfXS%2Bkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGewo%2FrjMvxosQlJKCrcA7RCaSJymuZaR82SKpPbnE3y2do%2FjWEDhXyTwT8L6KRp1ZT1l1w2wD0YjfEaTC3CAcvk%2BHEZiUdDLEfx41I9riow98bVlOlZDd%2BcoZ11E9A0WjSbJ78LSSuVTREWVKo%2BhWZicQ3KbBgdCtwdpWPdG8GnHRqfaplmp0uzaUbAGjHH4L8e8PwVMZscRJuY0kN5S7RGez0fxAd1p%2FsYBWsavxWcEVe0aM%2BUrONJGfW9%2FY9OlhCoCZbcC8pZ3GnvgsVzUsvk1MCscYRX1ORxjZi%2BAQnw0q9EyPcGDYF8dkAbU0FX9QaBnBcUsLJIskpYbOGslJ5WqYZYIsj9niMpYvBlibbDxR2rAPSUyHOrGB0kRGmiH2e1%2Fu31kriQoSRWdfPqmv9v3GUKLTHXfGo0ROxdRd%2F44QQKyCxQBWDZTHG3JVRkFWJChGCThc3BTsKTzfhwnnqQakaTXb8ddOl%2B1GosidIPd8FHuHNT1N4wn%2BoRzAIeNkHWltNbQLwXxU9MIxZgYGHbsSWyQm%2FqqXokusGxZwFYAs5nWZ%2BxO%2BQnLq132Bs2jHqtJfTaF6OxAJXZqnhYiOQXw8iI4vfplKE0BPjR33st%2Byee7PtUinZk2RMGtKV8QtCL%2FL%2Fidx0rcv11MOmd674GOqUB%2BsORhkhSKha9WCg0dZ4V1tPulo%2B1dzDiccY6PVzOO9AWCVXhKGR3fJe1%2BQU4uRc33crnI90qD0C9vYjkPBa3daARdxD12kyxlBlXoHmKGqlYrcm8LINWdhO7eoupkGc5IiBacP51%2FqmTt7piNZvQrzAOjIRjVR1nDPg5I6w7oPnQQPCFxA6tdjvHl8aLYzgzxgwKKO%2F0i8MZHZcC1DO67HyPaMpH&X-Amz-Signature=666d8f9a96fb3814b3158ad1c61f19225e0bca53ae46ff8bf4dca005ca21b580&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBHVSJG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFneEcxZfvxLfxrYTIGl8LRTizFOTx%2Bv41DMRPR2Rls5AiEA2nRT%2Fx2HUyZLicw0v13Wx%2Fnz4HmUSXZwLdxBecE27IMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN%2Bj5l%2BUMbSAJzZxdSrcA6Z5AdiWFx3KQa8HdH%2B5g%2FXhcJkNhSpLh4VNooeTWO3AenSrPVp3q%2B%2BxEpVmi0txx6LBOyyIdwWzUyB5ppo1O%2FwLMTl3x3Bt6KUQDr10%2FfkovQLAHZTyqOnLOt5yAcB%2Bwz%2BSvTYkfHrxHMCwQAIwEGzHQFcrAUuzh6ObGabHiX0O4sA%2F0bgmCeuzTXNgucPbVxTKTGmlK%2FmZ%2B11Bxes8JMWkzctF1GCCWRx6LBlK05%2FP9S2L5m0Y2%2Fh7Xb6lywG%2F1hoPwmkt9JId7ql28KjFyoA2%2BS%2BjHCcZALYtV1nUeiTlDMc%2Fa7tJZKbOthbna%2F%2BldjTutDJ7u4BLscjmQMS%2BYsjRmFy%2BJZXoiLkxSQHIK3j66akrcQoMzzzxdQah%2FK23zu3XgL%2FEbt8%2BTxjnbrew%2BChBNVAdfmvd0Y7rYIA4%2BLyOVuMVj3u%2BfuW%2FtFuzX%2BGSa1I%2BQJmx62RDmN1rO9eoUFxZKEktNmZJLwXta1YqY%2BTb8UAEqvMTpfXIbjiPrqEqzCtLD8Hy225KY8mrY9k%2FeVF1Uz4%2Fj3AoMRwhhRnm6k9F%2FrWkra9rJI6qKia1DW1cr7PDtT6mTZkvWRlZje43gg%2FQ27wTMbE5fpC%2FVY3rtUZBjTqzwxzjgCpKkU5nMN2d674GOqUBxlyjYfsozwp7Qjng6d0jwMlm9MY7XvvdBMaKpbtAAEzp%2B%2BhWyypqrMbujPJt6M2OTcWiAqD4Prs6oLIkWRpQcVEb1LpWr3QcGoTsYBWAYccHxi3AJibsL55n2eX3sDXb4pnXCCfVfBRnEiJvoSsBMuIcddavULOHRF2AD7%2BoAel1FkPcEMq%2FfUWd8QTggy7%2BbHeKEZ5B%2B9hA%2F4e7Vrh6ptzhavoT&X-Amz-Signature=f5f9884967de83f0dd622af95ad416be8357ee3be173eba7a6f9b7777329476b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUZPIZ3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T141030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDuECGHlCyyZWkoUmuwlvXXfxVIMCasUdKNq6JuvGfUfAiEA1fI0m5iMdaJRhbbexzqYSh0wfwqU5tWnuFE3sj1j3IEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHEAH24Hui62BsBozCrcAzAib67%2BpZb5gW%2FdMcf4S4%2FsgWnkUJAtOYPqUTk7ptXRbLj2OJpuiC0FEg46UeilO955B70h9KZCz07ZHIWefWhhsWKLb5N1E2CnOlmlZBiCEhyRuAzYgjrIJifHmGCpiRVCWA7y2zi%2FXzTLCcmOjF4e6kvzKNCuxBc5vTurQURVh%2Br8SboHfRCWQqUrPTxm6zAds2CIcj0qYTHT%2FfbnbJ%2F52DdYN0JtS6feLbRjkcnQbbNmSeUmnhlSaznKSb%2BbTQFFmfC%2FcoWElACo7L%2F9FqBjy0%2Bq966%2BswRF5IX3nlIGUTPyPMgE7HTy8BfROtEmrWp0xmsG5c0aV9vZamaEVk%2BWYZ%2BbLdL7xrIC44M49%2FyJ6fcEQy1BRMDi4kNYVNgU4zpC%2FGWxgi3FsBnxC6P0zP%2FYrbtnFQN0mHNhdfvfqOIOmaR3D9MPYOqvPvwZZSMWZFl9Tep0YWxbjb03Ja%2B4T6BvmkAGcU9hlYJMQ3sJP5CMhtgFlHdDwFCpPxZX%2F7XYn8n8Ggx2Ua2L7Mnk5efX9bX%2F0HYkTjykrkDyBNf%2FQ4CQ1bZ4mTIaz69qb3ulRS%2FDASCD3LcTeNWBY1FCPXrrULxuhEtvUW4FvYQJ%2FPuAS1HH4FON8zJZixCkXm47MP%2Bd674GOqUB9aQBycHwLv147qsZBffIbX955TZ1uvEat1s9Yxw6i2fOPMKykcc%2Fd2XWZMZ9joBOofZYptqGE1IeFKCqi2lkGxRNfqHSKFIjyaVIZ%2Bq5%2F6VPwQwW%2B1RS1ygc94oRbOZBinQ4cBhlBETeNeN%2F%2BMHzvOpwgv86DyKITgs36N%2FmzDXHjQ3khid3198Swl%2F4SkwDCYPFk3JmXOrsp7aMb1Vh3%2F%2BwyZoh&X-Amz-Signature=56d847a300479f9973f1bb4a0765818db1fc6844d227422680615eb6bc268b13&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

