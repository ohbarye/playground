(defproject your.domain.hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                  [org.clojure/clojure "1.8.0"]
                  [is.tagomor.woothee/woothee-java "1.7.0"]
                 ]
  :main ^:skip-aot your.domain.hello-world
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
