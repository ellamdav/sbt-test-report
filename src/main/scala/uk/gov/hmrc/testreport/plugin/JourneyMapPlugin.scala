/*
 * Copyright 2024 HM Revenue & Customs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package uk.gov.hmrc.testreport.plugin

import sbt.*
import sbt.Keys.*
import scalatags.Text.all.*
import scalatags.Text.tags2.article

object JourneyMapPlugin extends AutoPlugin {

  override def trigger = allRequirements

  object autoImport {
    val generateJourneyMap = taskKey[Unit]("Generates a simple journey map HTML page using screenshots.")
  }

  import autoImport._

  override lazy val projectSettings: Seq[Def.Setting[?]] = Seq(
    generateJourneyMap := {
      val log           = streams.value.log
      val baseDir       = (ThisBuild / baseDirectory).value
      val screenshotDir = baseDir / "target" / "journey-map" / "html-report" / "images" / "screenshots"

      val htmlOutputDir = baseDir / "target" / "journey-map" / "html-report"
      val htmlFile      = htmlOutputDir / "journeyMap.html"

      val features = (screenshotDir ** "Feature-*").get.flatMap { featureDir =>
        val featureName = featureDir.name
        val scenarios   = (featureDir ** "*.png").get.map { imagePath =>
          val imageName         = imagePath.name
          val relativeImagePath = imagePath
            .relativeTo(screenshotDir)
            .getOrElse(throw new Exception("Relative path calculation failed"))
            .getPath
          div(cls := "screenshot-container")(
            img(src := s"images/screenshots/$relativeImagePath", alt := imageName, cls := "screenshot")
          )
        }
        Seq(
          article(
            h2(featureName),
            div(cls := "journey")(scenarios)
          )
        )
      }

      val htmlContent = html(
        head(
//          title("Journey Map"),
          link(rel := "stylesheet", href := "css/journeyMap.css")
        ),
        body(
          h1("Journey Map"),
          ul(features)
        )
      )

      IO.write(htmlFile, htmlContent.toString)
      log.info(s"Journey map generated at: ${htmlFile.getPath}")

      os.makeDir.all(os.Path(htmlOutputDir / "css"))
      os.write.over(
        os.Path(htmlOutputDir / "css" / "journeyMap.css"),
        os.read(os.resource(getClass.getClassLoader) / "assets" / "styles" / "journeyMap.css")
      )

    }
  )
}
