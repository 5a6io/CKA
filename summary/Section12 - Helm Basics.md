# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJN5XVXQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUAONKBLJ3gLtpetF2xcucBDJTugajWJGDuIMXwE72NgIhANnw78KSBxH2a7xEMxCTf0bQBjBIYW2%2BmXuFp54Ehi3VKv8DCEcQABoMNjM3NDIzMTgzODA1IgyrnZY1XSI%2F6lFFHdwq3AN8ymsdcFa%2BYRU5Z0xTe0z9MNiEdPtAonCYn2ko2zrkGw5BfNA6OFYp6asTL5B8DsZEJpDQLkb3WL003KnxEYsQHMxbNhRmRqzmKqSXH6JCNEJkgJJ87tMomo8fa7%2Bfme0QUq8uyfGz3u2cmQYSuOlr2zMcLTWUEPBcj9VCv%2BW3uYJWOMRAUrkHLO15OejR0fuGWRYzuWUs7fwS7H34WBo1pvyDtKfjw7Ixpy9QZ5%2BeG%2FTMsM67zk1zRdKxYV6Fyxg%2F%2B5913KefYjRRnnTKKM%2FA1m%2FtFlH6ENKaZe1krZhbnQ5HGHb19IOmW3DTxUUl%2FWXYcbNB769ptXsYGWLBKbfu788ThFdcqgFC8qhxcK17qrdX17NsAfrATWGV0EmSchnGgVmF39FtPrWH1VP6RVgoxSZMWnQZG4JRPMfGHOdy8evMUSGts%2FRdu895BFSfQGz4fZ3nmN8oj3EXqMvL9J4qvSlOyyJSzZogj4Oh2Beok74LHkhmGUOO8Nv%2BQv4VJA1%2FvRKm7DOIau7y4sUtKJkQVlCyN%2FAlPXxmsVrH%2BjOMkQFf04g%2Bc28J%2FxWFwxnZWxMDJ%2BZZma192%2FYoAcqzdclK1vO1yCFRz9qj5A7BsKdMtHSUM3q%2Fq%2BimZh%2BpIDDOyeC%2BBjqkAe7eiIOI9vchJCGkVheX2d3Wgf%2B4vUB4gVHIGWri5El%2FZx1TpGn%2Bl1zz2UF1IsqAqCQ0ZGShdBDYFmcgpjx1Ry%2FjDVBNJnWbozJwb2oNaR32edjKdd%2FVAss92Mga5B%2BhGvdRWDdIU4421y00fBtcGLP408xEicbFPqWvEPQmOZeF29WM6%2BGBx0cNDEE9Fry2N%2By1S8veK6M8FnWphV0EPjDJ%2FeeK&X-Amz-Signature=8204f393cc9f05240dbdd12e949fc04fc7f6321c5c3d343151aaa7ae5ebbfa59&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LY4WG6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXCocTA1s5CRg6MZho9N%2Bh2kOBHNcBYmkBjQKExBHWhQIgMUd0%2BgOoI2yTRfEnJ81qJ1LOqQMkBv8WrI84taEYfKAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGzATnjfo0iOl1nr6CrcA14%2FA4Vks54LwhVqrbU8LdcN2W4%2BPxYZZltaWPGtXbJGu7nRQC19dyVPtugD2%2F97P110nDcNWhvr9jAPV8xmBSEA2mwCvPtnWLqm52bxbhSMJ%2FZNgTgUbiBfxEELGlrth3gFQxUGAeJS0SnMHaWOcdhfNhWjtW5%2Bef0cmU9NUnKSIlCvZLLUW5v3erwQ0Gijp%2FD3stzwdpFpsY%2BQ%2BYGYKk191njpxG0nwBvdQ8V7eClZ7GHu9P8beAvjXZYxIe%2B0jAvckYW9OuIcaCQx0wi51Y68nwFDez8FF6h78dx%2BVqkQbCLtXLKUH47x%2FbWqdjqWXe7r0FuSvkJVRxETGcG6q6TescVokgsKMj8ej%2FjfS4gd%2FW7l%2BirQrdoiXo7k7tu5tx69LI8jyH%2Bn1%2FMyOQFrVjblxPZzcN%2BvDcp04tRhS2Bb%2FSwgjl%2BL%2Bn5aWutAwMRvaocKQx5Jesl3C4xO4NmAehgrsaPbWbOmYTUrBSXiECJ2Q1uE%2B%2FAI13q%2F76I3IGaTVKPTz6ld2Bo8WPP7SVqFgrTv%2BPFKBI%2BBHrJlEVk5wKZvyblzXEFkSzB92iWxDcs8nVjzSJbTEAjovQoG20KoqzFB%2BZvK6tqzXrLO25%2Bwv3ROtsnXzN%2F9p387Opv3MNPK4L4GOqUBe8ABozn3y9uwPONZkKdJisH%2FEJhMVuD9UuMliVNu42JH8FLi0DYTqh6jy2wJXzqHt2D0XJxGGBwENbA8BPdHrfv%2FFLnYQLIMRrtsxzh0LxjicTt9UjE87GGySZZsGq14G7XBTr2sBS1s%2BpoSdSgZ5yPtXKhmHZgq3XNScf03VtT7Ctyy6O%2FHBv9D%2Bmx0Iy2kHyk5YCy%2FCJihBPEDfB1nWCT4CPoK&X-Amz-Signature=9981cfde972636c318d6e40cd4e1b80dfa96b1ef6087176727679534b581fc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZIDDFM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2EPJSxDWcZifzXxSZyjPUafhs%2FGmdt63xABBsusz9RAIgN7M9L6VZZc%2BV58QY42%2Bv1miyT6Dk7gsTS5kXiuZK6bwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFb3nfcUI5NS%2BUROPircAxfQgbngOUHLKq6enjafh%2BEjCCjWiejsPvlvVJP4vBGSs1TLitSK8n1D3Us0iGpF5nHILQOrqQ0nTWw3cB6pvawz%2FuqVdvBsx4Goehy6BxYjbDc%2Bwwa8B5bLuu3cbDYrqbNdVFOgORDNbxj6lsyQTGq%2Bun36gcJk8G0XlUxiQZPmykHxo%2BMUqX2vYOjahiNQKeFaSiBfCM5lF4CjQ8eK%2BlPOHwNxogg0RNCQoOEjhL4ws4%2FQOQ64T6f3ljWVeSwdCCzsUfJuvTv7UlOC1gGgD3WEu8IbNOfpLJXMO%2BguGxMhgjNsVuh1yTmdQ5O5plBHYPWaURvomXg8ouHRA91OMW7bdFAiu8GK0xvpjdS3AZKxVZEpCcKJ7KOGfzWyoeHytPbqxRreKhxMyLhYzXfr6HvJwrr4BQkqXB6lwN16UupSXZoN0vfs%2F0j6N1BtS8gWvP82GkF3ocLJS7bsSFNeFqQ2QKc%2FPHYQhFCv6A4irNXwrlytxpdmSr4u7t7jXmZHw0TcVq5BE69ri5BMDQRDwYXY%2FoTX7aGIxOv6caR11LKZOg7YnPV81t3gJBBBs3snKRn8caWlMIE%2BVPBwLLn8V9FLwy9MjHiBd2SCVGwtCrMrTA3S3dTub%2BXgxWCHMJrK4L4GOqUB4NEkDo9IVXz0mxNnWbz0zKamudlOrBnFScnaGLnXti0y6kabJg1UdBHPSHxb7ZVqK6ExdLqVGKY341UiEsddgGeVeEs4pvTdvUxQvo5Aghbzzliz4%2FiiG5KAYfRdHTX4zwQiVzSvAiKSXtgnLeamroR2bs2SrTld131hJc5bSqjXnCHol8VeZDOkoX7K49o%2FAqO6JyvgQw31Et%2BIcAvjpt7We3G9&X-Amz-Signature=e616b48f5007ebb359673ef3b47334fbe39f37c431c573dce1911c3bdf2ce885&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYHOGDB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Plztys%2FOnAYmzjTT%2FXjQhxc%2Bfvdo6nGstCGP55wvXQIhAO%2Fz2qPjjSwPWqbKgEOo4Qjad6JPu9ma%2Bv4vRasw%2F8YVKv8DCEcQABoMNjM3NDIzMTgzODA1IgxQE23df5mfj%2FIVkfkq3AON5re7kcUmcYNdALds6y0zJW4nyKEU6EAdh%2Fz%2FDgjZ6abs0msafeIduCOjShXOzmXlhPKf3eKJaMFavBhNC1bvCEzO1viQOfCLCncGF97v5fVPHbAdmdrNmAkbusiDf2rrW2b84IK5bHcj2emZ6S6tElco1asXbmYkWswmteWeMd81Cd1RjCOKxa7Uo23P4Ex%2BX5WRy8WkzHkFx%2BZ8AgfiYs%2B35XyXK%2FUyLJZKegNuZEf7YXZASuSvOzeXBwtkI5r6PAkvEoKDki9zgzc4LGib61G6EYCO41R9meQhTNosVF9dOLSworf1EvO7C0vyUmVIx%2BVQh48wB9pmwcrL1xIb08sxfnJxvwirAs8PEi6d8kLTHuCjfo0vhzYl%2F59S1TNBC3HhHU9qY%2BiTYY5C5BYVNgrPEYo51s76H%2FQyd67lH7yi47JNC7lz8FogY%2F6gXCRNgvi%2F%2FcDe%2B8AwLMkvlEPDHEoiQqvZpK0taZyhYcNmkcbsCaOW3IxdSrQveWyUK78u2rS5bE3Uay69aYQQkrCcg7FIpGj%2FC59FL2fG4nXQajW9Rkog73atQN00OOA2gMqY%2BgV%2FnzPP4VPCS4ZgmN8%2Ba9RuGaE7lYuJnCGouEyWRIzPEZiuMqIpTxLSajDRyeC%2BBjqkAVH8ZP3UknstRqV6%2BVquL%2FFXza4wy8foLs9uKMkUAtThnlb8ix7bTI%2FVvyYKRh2dTPOf6CvZLlztEKAjMvluqsdFzFSLrv6S4f8b5l5b4aNBlRqGuX2IonM3nibbDbNWpZ%2B7UCDu8290r44H2Z6Zncw7NXHLZriao%2F9D7yVGnNHY0mX60RhQ%2BiIC1kMaU90X36AsMUikojbcWIOrVgC5WQiH%2FM%2BU&X-Amz-Signature=d3590043c124c41dc85a79c7fb25823401d5d0ea86ace87862c616d3c9f5db0d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACCN3JC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2FREfv%2BpOZQNOW4nSJmUhTsWYQEcpeIDHTyF0c5X3KgIgBNhbF5JO0Nt75B%2Fn3UKTbUGjq0gsehZK6d5a9wiuWaYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIPjXx21Or5NbDyiFyrcA%2Bhvzf%2Fw7wOGJwK68U%2F%2FPy6uEAu1DbY%2F2Pidrgm66vPatVITOtk2u40yv0oj4qnVNfa9c5%2BnMZRu3uDKkqd%2FLdhJjRfsQoTefAiHqTwgVTYlVO3bmIkoTXcysq5peYQvBXinb5tjv%2FF9yLECxYX9cGDgD5zv%2BjKa2UraiV%2BNRLB%2Bz2%2FBiWgrrFBFEkWZK7Oq6TCNfgI3DV7x2Qn2iYi2VL1YJ7RkIjY3bkfYo5M8WfWUSQmdv7%2F0Cf%2FCL%2BWZvUeJNkwTaeeiGpRjNGkWzWa6N%2Bt0PbF6o8J2vbShSKZWfgji34L4sGV0ZnHTqf%2FIw5EEZjOg6hO689svXzSdrtH9Tgpfcu%2Bm7Inp3iN1PdpECYZY2cctqjqKgeQ1SCZBdJc3%2FTD7cErfW5oibFoN03wHxIK0jRGuAfB%2FOFT88%2FZ6Sq%2FkaJsg84mf2fwGk691HZblU7V1AxF92twRFzSIG7Z7BF47Wqb5i1BFegGWxy3Pe%2BPK%2By6KtpWJOzEIopJ66vGx%2BgjPNRUUaIoDo9ySMcXOG6vFHxGOzfQZWGB2yKrE59sAJCO566eVjtANlRwAb5eTRm%2Bk5SyMYqeyNxLTd%2BNWXhEZIfmp98mGTB4dx5MDf7lacpG%2FwHFVL4t0HjJMMP%2FJ4L4GOqUB9F18PVaX3lCQsjHcgrU84Isw4YHC69lJ61eJpNfhIl0hkPuEqf%2FEpElqloEO3Ec82h%2F9D7lSdYD8nN3Szbzy6QmsGVKbyTbOPE9nyJ0CB7OZPUR5UVPoyvlfvDgop6sZItdHdYquTK1yZrFETb693lHlCBhefbxOAc%2BhxspWt9estIPPU4k4WFlUgdsTKYi5nUBUTvUIdc9k7CLi5L4A0ycTdf52&X-Amz-Signature=be5f02d531b2935be11dcdf2941b29a991f0319841425e7ef278b0eaddae7382&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZAQVSS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiqgkLIUpLTkNSFoARDFpEGgC%2B7nHiPjvGRRBUdZ52NAiBckuvKX8qEC9%2FAs3QV5ZeYiVc5AEVSh1EIycm%2FKiNyyyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkWz0MDc5qXcBAzWQKtwD%2FqImOTR7BMZRV1hjZUSEyp%2B9pPI63QXfPTWVDKA%2BhhGFlyNWZqY%2BX%2FUnem%2FHBaqRaAmKDQPEJYyQ0wJes1KNgrB9VxlEzbdMw%2FTUegqoJa10v4DqoLMiYmEXNTzWj2%2F%2B40aNl4xTWhLkvhJgBe0QlDRxs6rFxbFVlem4o3yVLuO%2F2ktARG6fDE%2FSSPg8tI96q5tlXnkeFQVACLReZxjDxrrsziY6SjXIJukUGgP9jCtBuuYn9FzKG%2BrG3dnPthsv%2FQ%2Bifnr1ktFIz2Lu3W5NoihMBWb9gxVcP39Mtd6zvV%2Fj83QyR6KknCDQXCkQ41pfBFvfjtyntE0nsrakqDN%2BOvf0iLBgWzto1av%2B1S%2BWIupKxiePeOmHLFlqr0PyEOtC4%2FKRDdwe8AzWQX%2BQRco9Ta4VOpkj5qxZizEOCP3fkDJ2UaYqoqa%2FH3H2Dok40TdTRR%2FwvEWDd6IYQ4i02uiKegZKP5Kl7gta9HvzrC3rib%2Bg63KOjVtD5mVERC4%2FAYtfD61KSK2Z%2Boeg%2BjkHilDt0fwB18KPYjM%2FiUNiDLKmFzcfn3a9y%2BwTqrx45Q2f0HoESpJx%2FfNpjYrDH43bY%2BMv74PnOe4jPglwdoR3bfH6jFMt8FoZ8jzlitThgyAw%2F8ngvgY6pgFIFEsWi10ezpFZ3eHzUxoBdOaroNvq3kuDJhAbYqJWUKV4aEOP8YcYutMBX9Ivwn2K8AmBDbrIT7iqED6QwXvvtUAkXlT2Yu%2FPKI%2FAKvx8Ne2zgnU4YcT4UXfjeA7QEsCVMkSC3Ww9Xn%2Ba2Py%2BM1fAvaYhBHNE8ijdxKMZ%2FwjWn2IxgFWuchwisjU1dtDEF3SS%2FC2r4INOO4PVWJq%2FtV7pbcwzIV38&X-Amz-Signature=bfc51c3f32985ba115221e647410bd111e2006b6e4d5a87b0e8681982d3cc53c&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YSY7RY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI1A8kPCodSZWJkJQr5tG0iuh55dZTktNDX0okHEVgwAiBhHepK%2B8FxN6%2FmaseTT3pzWYok8fEKEflBUH4hbvuOkCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMm9dBFszsLdRLe5YAKtwDT8JJh7W%2FnrFwbeS5nCLpe4Ex4pLPSu6tuyWcbjbBXC8PrQT3ng40fIRh7O88Jt0OKepSybR1aY%2Fu7Sx19Pz0WdEjUET4xO7rYk5Scjxz4AGWEWa3EWn5VANuCIz%2BtKRaxOsBN2U0siFnvtDWbnZYlNn7DstresUtRc%2B0in6XgAXXkQz2PN0ThngsRNsMmCTJckwQnHZU%2BwYJwgdEMJg%2BzLoF%2B8TwRCf2kOPaXvhVTaNN5XK%2BgkOnFPxhKJbwRILZ3MvgzPdV0FktzL%2B5DtAIfRYQVodSOW9KRIYN7zkJiwqCFpoXaMFuSVrGqGTjEeW0r8MmApJadx4qSAw6pxhGOTcpl0AxoHuJ%2FMG4B0MsEdWmRBz2bxkK%2BPiW9dakvG5TfCsbQK7bUcWmpsDPOhLOJC6a7GwZc35K5Djoh5WKs5b6mKPX7o%2BPw1ssm6ISBePu3LQ0nVZYc2WubNibrtl3w%2BpWPVa%2BD5WyUoF5oAQOmVfCp3c7u48CeFe0J8ILYG1d73n2sF2GXEh%2B%2BOjC81opdZq%2B29tNEWNWlmR02G9%2F9zW0h5RwrND%2BeqI2544oJDjjXTsvoujQb3M1ktSxvX9zXV33WJrn6MM6HVtN8naSQfcGrCPi4fsATcx0RTEw%2FMngvgY6pgHL6PjAmRd1JlTECEO35Wk%2F%2BFSXrBpgfLmHaLBLH1E3%2BuT1oJxmssJz%2BYHqxBrZr3af3XOjbqfNHmMtUoz%2BqhwV466CiMh8cgp6xGwKLymQzAdDdEfDB5Tx7L0WimYsE1SlS8muq1AR%2B3o%2Fsh7mqWJXzbBcrvUI48qVSUDNVicHn%2F6Xhl4yTe6ZoCBVaS%2B913FgE4uW2iTtpm7rp0UaY%2Fczfg8qmChL&X-Amz-Signature=41b0b413f8d4c3f1f471a0af1b423f5ed8574f701d7c325f406b3e6c4d3e4905&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWRDYYW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ekp3ulFFfZ9jzmhm3ZjnVBPKtPDo6PFOhPqePiSC2AiEA3OW0TyVWJ%2FKGv07dcj7aGQeHvpiAsGGsdKzpnZJxo1gq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH%2BUTFRBA9vJFrBK%2BCrcA7NPYZPPhrweVJjKZC8XlJBYI8fRX%2Bl1Qv1hQChNouwpGek78BlaVOB6ErMi5CbKXg%2BR0FwhIXKD0jgU3L8IBvSzHbSEaQ8aNPuCjyYdiO9e0yd6T9DhJUVaGuOtKsM0fYy0WlUXrHuHA8CCwllM1YM1V2lI2ctYeTtuGty%2BkYEW99PKFhmdmsdFtQcn%2BP%2BVi%2FgJGw9nsp91cEn0fJKlAwYfizDqkAlUD9dLAEtXHDtdR51XhgjKvJRB5%2FPI5INlpWlRpZwoL4xFXKljN9azm6ac2EuYP0fZXjbF45pWQX%2BzIq7s5C7Ypyw00y5IUfMe%2BrR4oFFyn4h4oDRf6ubwvKpCfVSGaprseZ6l7CR6hE0eYFHXnrYJ4ZgmhOH6ODuIg2VqPZHrXKZwgkaLGfehlt1kb9g9FXnCz1kzoc4FGgXc2HGMqXthCS2pfWS4HuSbjEnifI%2Bf5YgCUCma%2B291XVQNKYKTibx4HWBU2u%2BZWin%2FRoY1yGbIKub1TC89nWAn9zy7aprEZR6Rux6lzRZw8IsrI6YQuZqdAV3TkR4yjUeOgxEJ5FcwaByIGoZ5AG92foi5A6anvSA5Qt0sgS67M3s2RL%2FJ1Khi5Y%2BJzewI%2Bg5Pk0qZ572vzKzaKkvSMJTK4L4GOqUByJH6pSzW4OaHEMEB2vhgEx0vdLQCFmu5s5uQ5b3QitwkntfqOAvXU7s7qMck3OH974QouolevTs4tJEPjfo3ZGXbCsjmOQiwwheLCUQ4kekiHOGKvntSTF3dYfGlbjCjrvp8RMlmXQ%2BGdqBEDDRuKezVpqnO95FWVgqmD1b4D7hOUTHvQaY8fG%2BWcFvMuH4vDrCtXARRGchAZlt0CBeLpMgqsAPq&X-Amz-Signature=87caeaaff52bac028f5abfcf9e04e074efcb56c86de3d4d6e24fca3e5d45f2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7K6LPY3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIHBxwjT3GmxAErjd98wkHveymUeLTOKXzpc9aA2ENbAIhANLpPMLQdrKzaDB6EBSiNLosJxdSoGjYeLBSbbeZ7EG%2BKv8DCEcQABoMNjM3NDIzMTgzODA1IgxoYt3M1e%2B1UITf5Bkq3AMXocwxH4HXMePI7JR8BPB58hCxHbfZkFyEB1i2%2FkyEthgpF0Dbq4nT6f2dZPe6hWtpA4azI9hDuG4aVWHdAjvUIinv8iPEfdbdx3UHfyvk8qpVN8ui5SYAzaii0lNZ7F0rs%2FpAPKparOzajF%2F9K9DmoC0dre%2FryYfkaKa1i6dOa0j86arONHbtaodObfLCqUx1Hvsv4JNUf00VNeez9HeS4FmO3NHGJWozgaB%2FMkxQJtgcR%2BUrJzPiDwJtw9dgz0sEzy3wKNctkatrUTy7zwtZf0b6%2B2jv3QrgTcM5WM7YsWbktW%2BWKPfFGciXLgET0Y2UFGD5am0riHRKeNmYI%2FJlV7O3hRR3sAKTmWghxqUXpegxXptGPpeVPZm5qJL%2FyFdCiXJi2ha%2FH12YolWtOkL0x5GQquvra1hseTZ2jYA3DIwMFRcJ%2FnE2YKQTHwJzQl1yiyx5S9jFcudD8sxqNRKSOiNPyHZK2Kl9b3hxOZ2IWeF8JJsQOl1CZLXHV5Y96ZFcPihRppR3lzz7vcdEvQ2tYXZHBh6kCvcM7H7u2yi%2BQwC0o%2BJ64ershu%2BmnfJZjijzkCPfQIvbeyOjmpfUDBcWQ6JDRJyQLHAu9v%2BHpG4W2VQ8rjF5705V%2BtyvQjCMyuC%2BBjqkARE6TgCLa5TI%2Bjw0T30PLnZTbUeNaQYYpiBNVdLwPwirvmhIMvSooQa44lfyr6VoJavQGiJErpWCSuLZx0QP3FvXYm%2BXvAwcYxr76xhABgzZ%2BLfJy7vbrD85hP8mMQ0WyKlF%2FWAtWjFWotHHnKE8JmRcrz3UuZE7CUg%2F86RWjVlOodsYB8JmE%2F8IOEsi7OhHK7zOk8fs1pKo3Nly12dW3BrGnD35&X-Amz-Signature=6f62a501f57b16b45147dd3b5fe8127b0d95d66811882194695e3dc1ebb2518e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

